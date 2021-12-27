/* eslint-disable require-jsdoc */

import {getJsonProperty, getClazz } from './ReflectUtils';

class MapUtils {
  static isPrimitive(obj) {
    switch (typeof obj) {
      case 'string':
      case 'number':
      case 'boolean':
        return true;
      default:
        return !!(obj instanceof String || obj === String ||
        obj instanceof Number || obj === Number ||
        obj instanceof Boolean || obj === Boolean);
    }
  }

  static isArray(object) {
    if (object === Array) {
      return true;
    } else if (typeof Array.isArray === 'function') {
      return Array.isArray(object);
    } else {
      return !!(object instanceof Array);
    }
  }

  /**
   * @param {any} Clazz constructor of the class we want to create
   * @param {any} jsonObject jsonObject from which we want to get this class
   * @return {any} instanse of class or undefined
   */
  static deserialize<T>(Clazz:{new(): T}, jsonObject) {
    if ((Clazz === undefined) || (jsonObject === undefined)) return undefined;
    const obj = new Clazz();
    Object.keys(obj).forEach((key) => {
      const propertyMetadataFn:(IJsonMetaData) => any = (propertyMetadata)=> {
        const propertyName = propertyMetadata.name || key;
        const innerJson = jsonObject ? jsonObject[propertyName] : undefined;
        const clazz = getClazz(obj, key);
        if (MapUtils.isArray(clazz)) {
          const metadata = getJsonProperty(obj, key);
          if (metadata.clazz || MapUtils.isPrimitive(clazz)) {
            if (innerJson && MapUtils.isArray(innerJson)) {
              return innerJson.map(
                  (item)=> MapUtils.deserialize(metadata.clazz, item),
              );
            } else {
              return undefined;
            }
          } else {
            return innerJson;
          }
        } else if (!MapUtils.isPrimitive(clazz)) {
          return MapUtils.deserialize(clazz, innerJson);
        } else {
          return jsonObject ? jsonObject[propertyName] : undefined;
        }
      };

      const propertyMetadata = getJsonProperty(obj, key);
      if (propertyMetadata) {
        obj[key] = propertyMetadataFn(propertyMetadata);
      } else {
        if (jsonObject && jsonObject[key] !== undefined) {
          obj[key] = jsonObject[key];
        }
      }
    });
    return obj;
  }
}

export default MapUtils;
