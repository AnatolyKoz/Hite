FROM openjdk:latest
WORKDIR /opt/app
EXPOSE 8080
ARG JAR_FILE=target/hite-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]