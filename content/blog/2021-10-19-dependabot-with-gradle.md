---
template: blog-post
title: How to configure Dependabot with Gradle
publishedDate: 2021-10-19T12:00:28.345Z
description: This document is a wow to configure Dependabot with Gradle
featured: true
img: ../../static/images/labyrinth-gd0618d8f1_1920.jpg
caption: "Photo credit: [**Pixabay**](https://pixabay.com/)"
imgAlt: Dependabot with Gradle
tags:
  - dependabot
  - gradle
  - github
  - dependency
---

## What is a Github Dependabot?

[Dependabot](https://dependabot.com/) provides a way to keep your dependencies up to date. Depending on the configuration, it checks your dependency files for outdated dependencies and opens PRs individually. Then based on requirement PRs can be reviewed and merged. 

## Dependabot with Gradle

Dependabot has a limited [support](https://dependabot.com/blog/gradle-support/) for Gradle. Dependabot looks for a `build.gradle` or a `settings.gradle` in your repo, then scans for outdated dependencies and creates a PR based on available updates.

### Issue

The issue aries when dependencies are maintained outside of these two files. Dependabot ONLY and ONLY scans `build.gradle` or `settings.gradle`. Most of the projects would follow this standard of having versions in these files, but remaining ones wont work at all.

### Solution

There is a **workaround** to this issue. Follow the steps explained below to tackle this issue.

* Create `dependencies.gradle` file to extract all the dependencies. The file name HAS TO BE `dependencies.gradle`, otherwise the solution will not work. (`version.gradle` is also not supported!)

```groovy

ext {
    // -- PLUGINS
    springBootVersion = "2.5.5"
    springDependencyManagementVersion = "1.0.11.RELEASE"
	....

    //-- DEPENDENCIES
	 ....  
	 springFoxBootVersion = "3.0.0"
    hibernateVersion = "5.4.31.Final"
    c3p0Version = "0.9.5.5"
    postgresVersion = "42.2.10"
    .... 
    supportDependencies = [
            springfox_boot_starter            : "io.springfox:springfox-boot-starter:$springFoxBootVersion",
            hibernate_entitymanager           : "org.hibernate:hibernate-entitymanager:$hibernateVersion",
            hibernate_core                    : "org.hibernate:hibernate-core:$hibernateVersion",
            c3p0                              : "com.mchange:c3p0:$c3p0Version"
            hibernate_java8                   : "org.hibernate:hibernate-java8:$hibernateVersion",
            postgresql                        : "org.postgresql:postgresql:$postgresVersion",
            ....
    ]
}


```

* Modify `build.gradle` to use `dependencies.gradle`

```groovy

buildscript {
    apply from: 'dependencies.gradle'
}
plugins {
    id 'org.springframework.boot' version "${springBootVersion}"
    id 'io.spring.dependency-management' version "${springDependencyManagementVersion}"
    ....
}
dependencies {
	....
    implementation supportDependencies.springfox_boot_starter
    implementation supportDependencies.hibernate_entitymanager
    implementation supportDependencies.hibernate_core
    implementation supportDependencies.c3p0
   ....
}
....

```
  
* Add dependabot support with `.github/dependabot.yml` file to the project.

```yaml
version: 2
updates:
  - package-ecosystem: "gradle" 
    directory: "/" 
    schedule:
      interval: "daily"

```

* Tadaaaa.. On the next run or on a force run of dependency check, if there are updates you should see PRs opened by dependabot.

## Conclusion

Dependabot is an amazing tool, to make sure your project gets latest dependencies. But the support of Gradle as compared to Maven is limited when dependencies are not maintained `build.gradle` or `settings.gradle`. 

If you dont want to maintain the versions in these two files, you can tweak your gradle files in a way that dependabot can scan the project and will find out the issues with the dependencies. 

Special Thanks to [Sumedh](https://github.com/sumedhdeshpande).

### References

* [Dependabot](https://dependabot.com/blog/gradle-support/)
* [Dependabot Code Repo](https://github.com/dependabot/dependabot-core)