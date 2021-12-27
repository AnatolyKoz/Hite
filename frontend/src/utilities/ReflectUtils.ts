/* eslint-disable require-jsdoc */
import 'reflect-metadata';

const jsonMetadataKey = 'jsonProperty';


export interface IJsonMetaData<T> {
    name?: string
    clazz?: {new(): T}
}

export function jsonProperty<T>(metadata?: IJsonMetaData<T> | string): any {
  if (metadata instanceof String || typeof metadata === 'string') {
    return Reflect.metadata(jsonMetadataKey, {
      name: metadata,
      clazz: undefined,
    });
  } else {
    const metadataObj = metadata as IJsonMetaData<T>;
    return Reflect.metadata(jsonMetadataKey, {
      name: metadataObj ? metadataObj.name : undefined,
      clazz: metadataObj ? metadataObj.clazz : undefined,
    });
  }
}

export function getJsonProperty<T>(target: any, propertyKey) : IJsonMetaData<T> {
  return Reflect.getMetadata(jsonMetadataKey, target, propertyKey);
}
export function getClazz(target: any, propertyKey: string): any {
  return Reflect.get(target, propertyKey);
}

