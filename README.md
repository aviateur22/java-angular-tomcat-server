# java-angular-tomcat-server
Project example to deploy an Angular spring-boot application on tomcat server

![enter image description here](https://raw.githubusercontent.com/aviateur22/picture_lesson/main/java3.PNG)

## Description
Architecture projet Angular + Spring-boot pour déploiement sur serveur Tomcat

Techno:
- Tomcat 9. X
- maven 3.9.X
- spring-boot 2.7.X
- spring-security
- spring-data-jpa
- postgreql
- Angular 16.2

## Deployment
- Local tomcat server
- Heroku

## Project structure
````
parent
|
|back----|
|    pom.xml
|	 application.properties
|	 database.properties	
|    logback-spring.xml
|
|front---|
|	 front-end-app
|    pom.xml    
|    
|
pom.xl
``````

![enter image description here](https://raw.githubusercontent.com/aviateur22/picture_lesson/main/java2.PNG)
## Pom.xml

### Parent pom.xml
main spring-boot-starter
````
<parent>  
	<groupId>org.springframework.boot</groupId>  
	<artifactId>spring-boot-starter-parent</artifactId>  
	<version>2.7.18</version>  
	<relativePath/> <!-- lookup parent from repository -->  
</parent>
````
#### profiles
3 profiles from pom.xml parent:
- local (spring-boot server)
-  tomcat
- heroku

It manage:
- angular build configuration
- angular baseHref
- database schema

````
<profiles>  
	<profile>  
		<id>local</id>  
		<properties>  
			<angular.configuration>development</angular.configuration>  
			<angular.base.href>/</angular.base.href>  
			<database.schema>sc_lalamiam</database.schema>  
		</properties>  
	</profile>  
	<profile>  
		<id>tomcat</id>  
		<properties>  
			<angular.configuration>tomcat</angular.configuration>  
			<angular.base.href>/lalamiam-app/</angular.base.href>  
			<database.schema>sc_lalamiam</database.schema>  
		</properties>  
	</profile>  
	<profile>  
		<id>heroku</id>  
		<properties>  
			<angular.configuration>production</angular.configuration>  
			<angular.base.href>/</angular.base.href>  
			<database.schema>sc_lalamiam</database.schema>  
		</properties>  
	</profile>  
</profiles>
````

### Back pom.xml
Dependencies for project. 
Plugin to copy Angular files in resources
Package project in war file

````
<build>  
	<resources>  
		<resource>  
			<directory>src/main/resources</directory>  
			<filtering>true</filtering>  
		</resource>  
	</resources>  
	<plugins>  
		<plugin>  
			<groupId>org.apache.maven.plugins</groupId>  
			<artifactId>maven-resources-plugin</artifactId>  
			<version>3.2.0</version>  
			<executions>  
				<execution>  
					<id>copy-angular-main</id>  
					<phase>validate</phase>  
					<goals>  
						<goal>copy-resources</goal>  
					</goals>  
					<configuration>  
					<outputDirectory>${project.basedir}/src/main/resources/static/</outputDirectory>  
					<resources>  
						<resource>  
						<directory>${project.parent.basedir}/front/lalamiam/dist/lalamiam/</directory>  
						</resource>  
					</resources>  
					</configuration>  
				</execution>  
			</executions>  
		</plugin>  
		<plugin>  
			<groupId>org.apache.maven.plugins</groupId>  
			<artifactId>maven-war-plugin</artifactId>  
			<configuration>  
				<packagingExcludes>WEB-INF/lib/tomcat-*.jar</packagingExcludes>  
				<warName>lalamiam-app</warName>  
			</configuration>  
		</plugin>  
	</plugins>  
</build>
````

### Front pom.xml
Plugin to build Angular project (Angular build configuration manage from parent pom.xml in profiles properties)

````
<build>  
	<plugins>  
		<plugin>  
			<groupId>org.codehaus.mojo</groupId>  
			<artifactId>exec-maven-plugin</artifactId>  
			<version>3.0.0</version>  
			<executions>  
				<execution>  
					<id>npm-install</id>  
					<phase>initialize</phase>  
					<goals>  
						<goal>exec</goal>  
					</goals>  
					<configuration>  
						<executable>npm</executable>  
						<workingDirectory>lalamiam</workingDirectory>  
						<arguments>  
							<argument>install</argument>  
						</arguments>  
					</configuration>  
				</execution>  
				<execution>  
					<id>npm-build</id>  
					<phase>generate-resources</phase>  
					<goals>  
						<goal>exec</goal>  
					</goals>  
					<configuration>  
						<executable>npm</executable>  
						<workingDirectory>lalamiam</workingDirectory>  
						<arguments>  
							<argument>run</argument>  
							<argument>build</argument>  
							<argument>--</argument>  
							<argument>--configuration</argument>  
							<argument>${angular.configuration}</argument>  
							<argument>--base-href=${angular.base.href}</argument>  
						</arguments>  
					</configuration>  
				</execution>  
			</executions>  
		</plugin> 
	</plugins>  
</build>
````

### Angular build configuration

Is defined with:
````
<argument>--configuration</argument> 
<argument>${angular.configuration}</argument>
````

### Angular href
 Is defined with:
````
<argument>--base-href=${angular.base.href}</argument>  
````


## Database
````
CREATE SCHEMA sc_lalamiam;  
ALTER SCHEMA sc_lalamiam OWNER TO lalamiam;  
  
CREATE TABLE if NOT EXISTS sc_lalamiam.users(  
"id" BIGINT PRIMARY KEY,  
name text not null  
);  
  
ALTER table IF EXISTS sc_lalamiam.users OWNER TO lalamiam;  
ALTER SCHEMA sc_lalamiam OWNER TO lalamiam;  
GRANT ALL ON TABLE sc_lalamiam.users TO lalamiam;  
  
CREATE SEQUENCE if not exists sc_lalamiam.users_pk_seq START WITH 1 INCREMENT BY 1 NO CYCLE;  
ALTER SEQUENCE if exists sc_lalamiam.users_pk_seq OWNER TO lalamiam;  
ALTER SEQUENCE if exists sc_lalamiam.users_pk_seq owned by sc_lalamiam.users.id;  
ALTER TABLE sc_lalamiam.users ALTER COLUMN id SET DEFAULT NEXTVAL('sc_lalamiam.users_pk_seq');  
  
INSERT INTO sc_lalamiam.users ("name") VALUES ('arthur'), ('theo'),('cyrille'), ('celine'),('helixa'),('enaly')
````

### Env database variable
DATABASE_URL=jdbc:postgresql://**server**:**port**/**database_name**
DATABASE_USER=**login**
DATABASE_PASSWORD=**password**
## Angular

### angular.json

    "configurations": {  
	    "production": {  		 
		    "budgets": [  
		    {  
				  ...
		    },  
		    {  
				  ...
		    }  
		    ],  
		    "outputHashing": "all",  
		    "fileReplacements": [  
		    {  
			    "replace": "src/environments/environment.ts",  
			    "with": "src/environments/environment.prod.ts"  
		    } ]  
	    },  
	    "development": { 		   
		    ...
		    "fileReplacements": [  
		    {  
			    "replace": "src/environments/environment.ts",  
			    "with": "src/environments/environment.dev.ts"  
		    } ]  
	    },  
	    "tomcat": {  		   
				.....
		    "fileReplacements": [  
		    {  
			    "replace": "src/environments/environment.ts",  
			    "with": "src/environments/environment.tomcat.ts"  
		    } ]  
	    }  
    },

Update as needed:
- configuration "tomcat" is manually added
- "fileReplacements": [  
	    {  
		    "replace": "src/environments/environment.ts",  
		    "with": **update as needed**
	    }  ]  
	    
### environment file

![enter image description here](https://raw.githubusercontent.com/aviateur22/picture_lesson/main/java1.PNG)
 > Config environment

    export interface EnvironmentRef {  
    production: boolean,  
    name: string,  
    api_base: string  
    };
