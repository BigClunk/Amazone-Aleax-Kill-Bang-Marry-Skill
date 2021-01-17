// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');
const persistenceAdapter = require('ask-sdk-s3-persistence-adapter');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = `Hello! welcome to your favourite childhood game kill bang marry. If you want to put all the pressure on me, 
        and see who i choose to kill bang and marry. Say 1. If you want me to give you three names from categories. say 2. `
        const repromptText = 'Im sorry please say your choice again, option one or option two'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};





const FirstOption = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name === 'FirstOption';
    },
    handle(handlerInput) {
        const speakOutput = 'Please enter the three names you want me to play with';
        const repromptText = 'Im sorry please say those names again'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SecondOption = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name === 'SecondOption';
    },
    handle(handlerInput) {
        const speakOutput = "What category would you like, Actor's , actresses, male musicians ,female musicians, Athletes, male super hero's/ si-fi Characters, female super hero's/ si-fi Characters or authors/poets ";
        const repromptText = "Im sorry please say your choice again Actor's , actresses, male musicians female musicians, Athletes, male super hero's/ si-fi Characters, female super hero's / si-fi Characters or authors/poets  "
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};




const CaptureName = {
    

  canHandle(handlerInput){
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
         && handlerInput.requestEnvelope.request.intent.name === 'CaptureName';
  },
  
  
  
  async handle(handlerInput){
     
      const firstName = handlerInput.requestEnvelope.request.intent.slots.firstName.value;
      const firstNameTwo = handlerInput.requestEnvelope.request.intent.slots.firstNameTwo.value;
      const firstNameThree = handlerInput.requestEnvelope.request.intent.slots.firstNameThree.value;
      const lastName = handlerInput.requestEnvelope.request.intent.slots.lastName.value;
      const lastNameTwo = handlerInput.requestEnvelope.request.intent.slots.lastNameTwo.value;
      const lastNameThree = handlerInput.requestEnvelope.request.intent.slots.lastNameThree.value;
      
      const attributesManager = handlerInput.attributesManager;
      
      let nameAttributes = {
          "firstName" : firstName,
          "firstNameTwo" : firstNameTwo,
          "firstNameThree" : firstNameThree,
          "lastName" : lastName,
          "lastNameTwo" : lastNameTwo,
          "lastNameThree" : lastNameThree

      };
      
    var array = new Array(firstName, firstNameTwo, firstNameThree); // makes the array with the given firstNames
    
    var unsortArray = array.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
      
      attributesManager.setPersistentAttributes(nameAttributes);
      await attributesManager.savePersistentAttributes();
      
      
      const speechText = ` I would Kill ${unsortArray[0]} , \n Bang ${unsortArray[1]},  \n Marry  ${unsortArray[2]}. Now choose one to kill one to marry and one to have coitus with `
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt()
        .getResponse();
      
  }
};

const Actors = {
    
    canHandle(handlerInput){
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
         && handlerInput.requestEnvelope.request.intent.name === 'Actors';
  },
  
 handle(handlerInput){
       
    // reads the file and puts all of the contents in the text file into an array 
    var fs = require("fs");
    var text = fs.readFileSync("TextFiles/Actors.txt").toString('utf-8');
    var textByLine = text.split("\n")
    
    // will take the array and sort the iteams in the array randomly 
    var unsortArray = textByLine.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
   
        const speechText = ` The 3 names are ${unsortArray[0]} , ${unsortArray[1]} and ${unsortArray[2]}  `
        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt()
        .getResponse();


}
 


   
};
   


const Actresses = {
    
    canHandle(handlerInput){
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
         && handlerInput.requestEnvelope.request.intent.name === 'Actresses';
  },
  
 handle(handlerInput){
       
    // reads the file and puts all of the contents in the text file into an array 
    var fs = require("fs");
    var text = fs.readFileSync("TextFiles/Actresses.txt").toString('utf-8');
    var textByLine = text.split("\n")
    
    // will take the array and sort the iteams in the array randomly 
    var unsortArray = textByLine.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
   
        const speechText = ` The 3 names are ${unsortArray[0]} , ${unsortArray[1]} and ${unsortArray[2]}  `
        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt()
        .getResponse();


}
 
};

   


 const FemaleMusicians = {
    
    canHandle(handlerInput){
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
         && handlerInput.requestEnvelope.request.intent.name === 'FemaleMusicians';
  },
  
 handle(handlerInput){
       
    // reads the file and puts all of the contents in the text file into an array 
    var fs = require("fs");
    var text = fs.readFileSync("TextFiles/FemaleSingers.txt").toString('utf-8');
    var textByLine = text.split("\n")
    
    // will take the array and sort the iteams in the array randomly 
    var unsortArray = textByLine.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
   
        const speechText = ` The 3 names are ${unsortArray[0]} , ${unsortArray[1]} and ${unsortArray[2]}  `
        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt()
        .getResponse();


}
 
};


const MaleMusicians = {
    
    canHandle(handlerInput){
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
         && handlerInput.requestEnvelope.request.intent.name === 'MaleMusicians';
  },
  
 handle(handlerInput){
       
    // reads the file and puts all of the contents in the text file into an array 
    var fs = require("fs");
    var text = fs.readFileSync("TextFiles/MaleSingers.txt").toString('utf-8');
    var textByLine = text.split("\n")
    
    // will take the array and sort the iteams in the array randomly 
    var unsortArray = textByLine.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
   
        const speechText = ` The 3 names are ${unsortArray[0]} , ${unsortArray[1]} and ${unsortArray[2]}  `
        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt()
        .getResponse();


}
 
};


const MaleAthletes = {
    
    canHandle(handlerInput){
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
         && handlerInput.requestEnvelope.request.intent.name === 'MaleAthletes';
  },
  
 handle(handlerInput){
       
    // reads the file and puts all of the contents in the text file into an array 
    var fs = require("fs");
    var text = fs.readFileSync("TextFiles/Athletes.txt").toString('utf-8');
    var textByLine = text.split("\n")
    
    // will take the array and sort the iteams in the array randomly 
    var unsortArray = textByLine.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
   
        const speechText = ` The 3 names are ${unsortArray[0]} , ${unsortArray[1]} and ${unsortArray[2]}  `
        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt()
        .getResponse();


}
 
};

const MaleSuperHeros = {
    
    canHandle(handlerInput){
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
         && handlerInput.requestEnvelope.request.intent.name === 'MaleSuperHeros';
  },
  
 handle(handlerInput){
       
    // reads the file and puts all of the contents in the text file into an array 
    var fs = require("fs");
    var text = fs.readFileSync("TextFiles/MaleSuperHero's_Sci-FiCharacters.txt").toString('utf-8');
    var textByLine = text.split("\n")
    
    // will take the array and sort the iteams in the array randomly 
    var unsortArray = textByLine.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
   
        const speechText = ` The 3 names are ${unsortArray[0]} , ${unsortArray[1]} and ${unsortArray[2]}  `
        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt()
        .getResponse();


}
 
};


const FemaleSuperHeros = {
    
    canHandle(handlerInput){
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
         && handlerInput.requestEnvelope.request.intent.name === 'FemaleSuperHeros';
  },
  
 handle(handlerInput){
       
    // reads the file and puts all of the contents in the text file into an array 
    var fs = require("fs");
    var text = fs.readFileSync("TextFiles/FemaleSuperHero's_SciFiCharacter.txt").toString('utf-8');
    var textByLine = text.split("\n")
    
    // will take the array and sort the iteams in the array randomly 
    var unsortArray = textByLine.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
   
        const speechText = ` The 3 names are ${unsortArray[0]} , ${unsortArray[1]} and ${unsortArray[2]}  `
        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt()
        .getResponse();


}
 
};


const Authors = {
    
    canHandle(handlerInput){
      return handlerInput.requestEnvelope.request.type === 'IntentRequest'
         && handlerInput.requestEnvelope.request.intent.name === 'Authors';
  },
  
 handle(handlerInput){
       
    // reads the file and puts all of the contents in the text file into an array 
    var fs = require("fs");
    var text = fs.readFileSync("TextFiles/Authors_Poets.txt").toString('utf-8');
    var textByLine = text.split("\n")
    
    // will take the array and sort the iteams in the array randomly 
    var unsortArray = textByLine.sort(func); // will sort the 3 names in the array randomly
    function func(a,b){
        return 0.5 - Math.random();
    }
   
        const speechText = ` The 3 names are ${unsortArray[0]} , ${unsortArray[1]} and ${unsortArray[2]}  `
        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt()
        .getResponse();


}
 
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .withPersistenceAdapter(
        new persistenceAdapter.S3PersistenceAdapter({bucketName:process.env.S3_PERSISTENCE_BUCKET})
        )
    .addRequestHandlers(
        LaunchRequestHandler,
        FirstOption,
        SecondOption,
        CaptureName,
        Actors,
        Actresses,
        FemaleMusicians,
        MaleMusicians,
        MaleAthletes,
        MaleSuperHeros,
        FemaleSuperHeros,
        Authors,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
