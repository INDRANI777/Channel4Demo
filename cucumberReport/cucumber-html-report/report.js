$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/ui/feature/gmail/GmailAttachmentFlow.feature");
formatter.feature({
  "name": "Gmail mail attachment flow",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@gmailAttachments"
    },
    {
      "name": "@gmail"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User logged in using credential and attached document.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailAttachmentDoc"
    }
  ]
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.step({
  "name": "User login with \u003cEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.step({
  "name": "user upload attachment in compose with \u003crecipientMailId\u003e , \u003cmailSubject\u003e , \u003cmailBody\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCase",
        "Email",
        "password",
        "recipientMailId",
        "mailSubject",
        "mailBody"
      ]
    },
    {
      "cells": [
        "TC_4",
        "Provide Email",
        "Provide password",
        "Provide recipient mail",
        "Test Mail",
        "Hello, this is the test mail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logged in using credential and attached document.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailAttachments"
    },
    {
      "name": "@gmail"
    },
    {
      "name": "@gmailAttachmentDoc"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$9SnZ6vNp.login$accessor$ixGdnXYf(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$9SnZ6vNp.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat ✽.User navigating to gmail signIn page(src/test/resources/ui/feature/gmail/GmailAttachmentFlow.feature:6)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$9SnZ6vNp.login$accessor$ixGdnXYf(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$9SnZ6vNp.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User login with Provide Email and Provide password",
  "keyword": "When "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_validate_the_gmail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user upload attachment in compose with Provide recipient mail , Test Mail , Hello, this is the test mail",
  "keyword": "And "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_upload(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/ui/feature/gmail/GmailLogin.feature");
formatter.feature({
  "name": "Gmail mail login flow",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@gmailLogin"
    },
    {
      "name": "@gmail"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User logged in using correct credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSignInFlow"
    }
  ]
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.step({
  "name": "User login with \u003cEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCase",
        "Email",
        "password"
      ]
    },
    {
      "cells": [
        "TC_1",
        "Provide Email",
        "Provide password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logged in using correct credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailLogin"
    },
    {
      "name": "@gmail"
    },
    {
      "name": "@gmailSignInFlow"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$W1coRNNw.login$accessor$4saT8Q9Z(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$W1coRNNw.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat ✽.User navigating to gmail signIn page(src/test/resources/ui/feature/gmail/GmailLogin.feature:6)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$W1coRNNw.login$accessor$4saT8Q9Z(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$W1coRNNw.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User login with Provide Email and Provide password",
  "keyword": "When "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "User logged in using credential with invalid email.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSignInWrongMail"
    }
  ]
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.step({
  "name": "User signIn with invalid \u003cEmail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User validates \u003cErrorMessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCase",
        "Email",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "TC_2",
        "Provide wrong email",
        "Couldn\u0027t find your Google Account"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logged in using credential with invalid email.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailLogin"
    },
    {
      "name": "@gmail"
    },
    {
      "name": "@gmailSignInWrongMail"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$KGpyoFII.login$accessor$iV7XImEC(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$KGpyoFII.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat ✽.User navigating to gmail signIn page(src/test/resources/ui/feature/gmail/GmailLogin.feature:15)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$KGpyoFII.login$accessor$iV7XImEC(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$KGpyoFII.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User signIn with invalid Provide wrong email",
  "keyword": "When "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_login_inValidEmail(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validates Couldn\u0027t find your Google Account",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_validate_ErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "User logged in using credential with invalid password.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSignInWrongPassword"
    }
  ]
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.step({
  "name": "User signIn with \u003cEmail\u003e and invalid \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User validates \u003cErrorMessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCase",
        "Email",
        "password",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "TC_3",
        "Provide Email",
        "Provide wrong password",
        "Wrong password. Try again or click �Forgot password� to reset it."
      ]
    }
  ]
});
formatter.scenario({
  "name": "User logged in using credential with invalid password.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailLogin"
    },
    {
      "name": "@gmail"
    },
    {
      "name": "@gmailSignInWrongPassword"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$iafrb4vZ.login$accessor$TGvIbxb6(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$iafrb4vZ.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat ✽.User navigating to gmail signIn page(src/test/resources/ui/feature/gmail/GmailLogin.feature:25)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$iafrb4vZ.login$accessor$TGvIbxb6(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$iafrb4vZ.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User signIn with Provide Email and invalid Provide wrong password",
  "keyword": "When "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_login_inValidPassword(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validates Wrong password. Try again or click �Forgot password� to reset it.",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_validate_ErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/ui/feature/gmail/GmailSendEmailFlow.feature");
formatter.feature({
  "name": "Gmail send email flow",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@gmailSendEmail"
    },
    {
      "name": "@gmail"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User send email with document.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmailWithDoc"
    }
  ]
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.step({
  "name": "User login with \u003cEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.step({
  "name": "user upload attachment in compose with \u003crecipientMailId\u003e , \u003cmailSubject\u003e , \u003cmailBody\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCase",
        "Email",
        "password",
        "recipientMailId",
        "mailSubject",
        "mailBody"
      ]
    },
    {
      "cells": [
        "TC_5",
        "Provide Email",
        "Provide password",
        "Provide recipient mail",
        "Test Mail",
        "Hello, this is the test mail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User send email with document.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmail"
    },
    {
      "name": "@gmail"
    },
    {
      "name": "@gmailSendEmailWithDoc"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$I7oxuTWs.login$accessor$SAYYOFkd(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$I7oxuTWs.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat ✽.User navigating to gmail signIn page(src/test/resources/ui/feature/gmail/GmailSendEmailFlow.feature:6)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$I7oxuTWs.login$accessor$SAYYOFkd(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$I7oxuTWs.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User login with Provide Email and Provide password",
  "keyword": "When "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_validate_the_gmail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user upload attachment in compose with Provide recipient mail , Test Mail , Hello, this is the test mail",
  "keyword": "And "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_upload(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_SendMail()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "User send email without document.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmailWithoutDoc"
    }
  ]
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.step({
  "name": "User login with \u003cEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.step({
  "name": "user compose mail without document \u003crecipientMailId\u003e , \u003cmailSubject\u003e , \u003cmailBody\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCase",
        "Email",
        "password",
        "recipientMailId",
        "mailSubject",
        "mailBody"
      ]
    },
    {
      "cells": [
        "TC_6",
        "Provide Email",
        "Provide password",
        "Provide recipient mail",
        "Test Mail",
        "Hello, this is the test mail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User send email without document.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmail"
    },
    {
      "name": "@gmail"
    },
    {
      "name": "@gmailSendEmailWithoutDoc"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$4r5tBMjy.login$accessor$VATEAbNL(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$4r5tBMjy.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat ✽.User navigating to gmail signIn page(src/test/resources/ui/feature/gmail/GmailSendEmailFlow.feature:18)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$4r5tBMjy.login$accessor$VATEAbNL(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$4r5tBMjy.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User login with Provide Email and Provide password",
  "keyword": "When "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_validate_the_gmail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user compose mail without document Provide recipient mail , Test Mail , Hello, this is the test mail",
  "keyword": "And "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_upload_without_Doc(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_SendMail()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "User send email without recipient mail.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmailWithoutRecipientmail"
    }
  ]
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.step({
  "name": "User login with \u003cEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.step({
  "name": "user upload attachment in compose with \u003crecipientMailId\u003e , \u003cmailSubject\u003e , \u003cmailBody\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.step({
  "name": "User is validating the alert error message \u003cErrorMessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCase",
        "Email",
        "password",
        "recipientMailId",
        "mailSubject",
        "mailBody",
        "ErrorMessage"
      ]
    },
    {
      "cells": [
        "TC_7",
        "Provide Email",
        "Provide password",
        "",
        "Test Mail",
        "Hello, this is the test mail",
        "Please specify at least one recipient."
      ]
    }
  ]
});
formatter.scenario({
  "name": "User send email without recipient mail.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmail"
    },
    {
      "name": "@gmail"
    },
    {
      "name": "@gmailSendEmailWithoutRecipientmail"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$SmBouleU.login$accessor$7mDWT7ph(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$SmBouleU.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat ✽.User navigating to gmail signIn page(src/test/resources/ui/feature/gmail/GmailSendEmailFlow.feature:30)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$SmBouleU.login$accessor$7mDWT7ph(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$SmBouleU.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User login with Provide Email and Provide password",
  "keyword": "When "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_validate_the_gmail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user upload attachment in compose with  , Test Mail , Hello, this is the test mail",
  "keyword": "And "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_upload(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_SendMail()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is validating the alert error message Please specify at least one recipient.",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_validateAlert_ErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "User send email without mail subject.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmailWithoutMailSubject"
    }
  ]
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.step({
  "name": "User login with \u003cEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.step({
  "name": "user upload attachment in compose with \u003crecipientMailId\u003e , \u003cmailSubject\u003e , \u003cmailBody\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCase",
        "Email",
        "password",
        "recipientMailId",
        "mailSubject",
        "mailBody"
      ]
    },
    {
      "cells": [
        "TC_8",
        "Provide Email",
        "Provide password",
        "Provide recipient mail",
        "",
        "Hello, this is the test mail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User send email without mail subject.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmail"
    },
    {
      "name": "@gmail"
    },
    {
      "name": "@gmailSendEmailWithoutMailSubject"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$qJokwtAQ.login$accessor$BHBokLMk(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$qJokwtAQ.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat ✽.User navigating to gmail signIn page(src/test/resources/ui/feature/gmail/GmailSendEmailFlow.feature:43)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$qJokwtAQ.login$accessor$BHBokLMk(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$qJokwtAQ.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User login with Provide Email and Provide password",
  "keyword": "When "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_validate_the_gmail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user upload attachment in compose with Provide recipient mail ,  , Hello, this is the test mail",
  "keyword": "And "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_upload(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_SendMail()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "User send email without mail body.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmailWithoutMailBody"
    }
  ]
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.step({
  "name": "User login with \u003cEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.step({
  "name": "user upload attachment in compose with \u003crecipientMailId\u003e , \u003cmailSubject\u003e , \u003cmailBody\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCase",
        "Email",
        "password",
        "recipientMailId",
        "mailSubject",
        "mailBody"
      ]
    },
    {
      "cells": [
        "TC_9",
        "Provide Email",
        "Provide password",
        "Provide recipient mail",
        "Test Mail",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "User send email without mail body.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmail"
    },
    {
      "name": "@gmail"
    },
    {
      "name": "@gmailSendEmailWithoutMailBody"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$lofCw3JP.login$accessor$8UUyOF7l(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$lofCw3JP.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat ✽.User navigating to gmail signIn page(src/test/resources/ui/feature/gmail/GmailSendEmailFlow.feature:55)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$lofCw3JP.login$accessor$8UUyOF7l(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$lofCw3JP.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User login with Provide Email and Provide password",
  "keyword": "When "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_validate_the_gmail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user upload attachment in compose with Provide recipient mail , Test Mail , ",
  "keyword": "And "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_upload(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_SendMail()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "User send email with invalid recipient mail.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmailWithInvalidRecipientEmailAddress"
    }
  ]
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.step({
  "name": "User login with \u003cEmail\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.step({
  "name": "user upload attachment in compose with \u003crecipientMailId\u003e , \u003cmailSubject\u003e , \u003cmailBody\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.step({
  "name": "User is validating the inbox for invalid email address as recipient",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "TestCase",
        "Email",
        "password",
        "recipientMailId",
        "mailSubject",
        "mailBody"
      ]
    },
    {
      "cells": [
        "TC_10",
        "Provide Email",
        "Provide password",
        "Provide invalid recipient mail ID",
        "Test Mail",
        "Hello, this is the test mail"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User send email with invalid recipient mail.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@gmailSendEmail"
    },
    {
      "name": "@gmail"
    },
    {
      "name": "@gmailSendEmailWithInvalidRecipientEmailAddress"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigating to gmail signIn page",
  "keyword": "Given "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page()"
});
formatter.result({
  "error_message": "net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate class org.openqa.selenium.chrome.ChromeDriver\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:144)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$iiRrVUB0.login$accessor$9j8R7gdj(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$iiRrVUB0.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat ✽.User navigating to gmail signIn page(src/test/resources/ui/feature/gmail/GmailSendEmailFlow.feature:67)\r\nCaused by: net.thucydides.core.webdriver.DriverConfigurationError: Could not instantiate new WebDriver instance of type class org.openqa.selenium.chrome.ChromeDriver (session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n). See below for more details.\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:158)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newDriverInstance(WebDriverFacade.java:141)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.newProxyDriver(WebDriverFacade.java:132)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.getProxiedDriver(WebDriverFacade.java:102)\r\n\tat net.thucydides.core.webdriver.WebDriverFacade.get(WebDriverFacade.java:172)\r\n\tat ui.page.GmailAttachmentFeatureFlow.login(GmailAttachmentFeatureFlow.java:53)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$iiRrVUB0.login$accessor$9j8R7gdj(Unknown Source)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat net.thucydides.core.steps.BaseMethodRunner.invokeMethod(BaseMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.NormalMethodRunner.invokeMethodAndNotifyFailures(NormalMethodRunner.java:18)\r\n\tat net.thucydides.core.steps.StepInterceptor.runNormalMethod(StepInterceptor.java:377)\r\n\tat net.thucydides.core.steps.StepInterceptor.testStepResult(StepInterceptor.java:162)\r\n\tat net.thucydides.core.steps.StepInterceptor.intercept(StepInterceptor.java:75)\r\n\tat ui.page.GmailAttachmentFeatureFlow$ByteBuddy$iiRrVUB0.login(Unknown Source)\r\n\tat ui.steps.GmailAttachmentFlowSteps.user_navigating_to_gmail_sign_in_page(GmailAttachmentFlowSteps.java:29)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:31)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:25)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:40)\r\n\tat cucumber.api.TestStep.executeStep(TestStep.java:102)\r\n\tat cucumber.api.TestStep.run(TestStep.java:83)\r\n\tat cucumber.api.TestCase.run(TestCase.java:58)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:80)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:118)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:56)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:127)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\nCaused by: org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 88\nCurrent browser version is 91.0.4472.164 with binary path C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-PC\u0027, ip: \u0027192.168.29.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: driver.version: ProvideNewDriver\nremote stacktrace: Backtrace:\n\tGetHandleVerifier [0x0088B963+483]\n\tGetHandleVerifier [0x0088B941+449]\n\tGetHandleVerifier [0x00C33308+3832712]\n\tGetHandleVerifier [0x00C4D69A+3940122]\n\tGetHandleVerifier [0x00C49AFB+3924859]\n\tGetHandleVerifier [0x00C47D9C+3917340]\n\tGetHandleVerifier [0x00C6E7FE+4075646]\n\tGetHandleVerifier [0x00C6E56C+4074988]\n\tGetHandleVerifier [0x00C6B2EB+4062059]\n\tGetHandleVerifier [0x00C4ED14+3945876]\n\tGetHandleVerifier [0x00C4FBCE+3949646]\n\tGetHandleVerifier [0x00C4FB59+3949529]\n\tOrdinal0 [0x0084B5CC+46540]\n\tOrdinal0 [0x00849F53+40787]\n\tOrdinal0 [0x00849B12+39698]\n\tGetHandleVerifier [0x00B51468+2907368]\n\tGetHandleVerifier [0x009971EE+1096302]\n\tGetHandleVerifier [0x00953E8D+821005]\n\tGetHandleVerifier [0x0095396B+819691]\n\tGetHandleVerifier [0x00953881+819457]\n\tGetHandleVerifier [0x0097F463+998627]\n\tBaseThreadInitThunk [0x74FB339A+18]\n\tRtlInitializeExceptionChain [0x772C9ED2+99]\n\tRtlInitializeExceptionChain [0x772C9EA5+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.lambda$newInstance$0(ChromeDriverProvider.java:64)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ProvideNewDriver.withConfiguration(ProvideNewDriver.java:40)\r\n\tat net.serenitybdd.core.webdriver.driverproviders.ChromeDriverProvider.newInstance(ChromeDriverProvider.java:60)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.createWebDriver(WebDriverFactory.java:169)\r\n\tat net.thucydides.core.webdriver.WebDriverFactory.newWebdriverInstance(WebDriverFactory.java:150)\r\n\t... 57 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User login with Provide Email and Provide password",
  "keyword": "When "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_login(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User validate the gmail page",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_validate_the_gmail_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user upload attachment in compose with Provide invalid recipient mail ID , Test Mail , Hello, this is the test mail",
  "keyword": "And "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_upload(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User send the mail to recipient",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_SendMail()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is validating the inbox for invalid email address as recipient",
  "keyword": "Then "
});
formatter.match({
  "location": "GmailAttachmentFlowSteps.user_validate_inbox_emailAddress()"
});
formatter.result({
  "status": "skipped"
});
});