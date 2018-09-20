
import Chance from 'chance';

it('Clear Cookies', function() {
  		cy.clearCookies()
 	})
describe('Life flow by Agent',function(){

	const chance = new Chance();
	const fname = chance.first()
	const lname = chance.last()
	
before(function(){
	cy.visit('http://staging.assurance.com')
	cy.contains('Sign in').click()
	cy.get('[type="email"]').type('shila@assurance.com')
	cy.get('[type="password"]').type('Assurance1')
	cy.get('.auth0-label-submit').contains('Log In').click()
	cy.wait(8000)
	cy.visit('https://staging.assurance.com/rep/plate')
	cy.wait(5000)

})

beforeEach(function () {
	Cypress.Cookies.preserveOnce("_insurance_session", "remember_token")

})

//Choose the insurance type
it('Insurance type',function(){
	cy.get('#plate-content > h3').should('have.text','What type of insurance are you interested in?')
	cy.get('#hinet-lead_type > div:nth-child(2) > label').contains('Life').click()
	cy.wait(5000)
})
          
		 
//General Information of Customer
it('General Information',function(){
	cy.get('#hinet-fname').type(fname)
	cy.get('#hinet-lname').type(lname)
	cy.get('#hinet-phone').type('4242186834')
	cy.contains('Next').click()
	cy.wait(5000)
})

//Gender Life
it('Gender',function(){
	cy.get('#plate-content > div.plate-question').should('have.text','What is your gender?')
	cy.get('#hinet-gender > :nth-child(2) > label').click()
	cy.wait(5000)
})

//Type Date of birth
it('Date of Birth',function(){
	cy.get('.plate-question').then(($question) => {

		if($question.text().includes('When were you born?')) {
			cy.log('DOB plate found')
			cy.get('#hinet-dob').type('01/02/1960')
			cy.contains('Save & Next').click()
		} 
		else{
			cy.log('DOB plate not found')
		}

		cy.wait(6000)
	})
})

//Enter Zip Code
it('Zip Life',function(){
	cy.get('.plate-question').then(($question) => {
    
		    if ($question.text().includes('What is your zip code?')) {
		       	cy.log('Zip Plate Found')
		     	cy.get('input[id=hinet-zip]').type('98512')
				cy.contains('Save & Next').click()
		    } 
		    else {
		    	cy.log('Zip Plate Not Found')	
		    }

	cy.wait(5000) 
	})
})

//Height_Weight_Life
it ('Height weight_Life',function(){
	cy.get('#hinet-height_feet').type('6')
	cy.get('#hinet-height_inch').type('5')
	cy.get('#hinet-weight').type('200')
	cy.contains('Save & Next').click()
	cy.wait(5000)
})

//Information Confirmation
it('Information Confirmation',function(){ 
	cy.get('#name-confirmation').click()
	cy.get('#gender-confirmation').click()
	cy.get('#dob-confirmation').click()
	cy.get('#address-confirmation').click()
	cy.get('#height-confirmation').click()
	cy.get('#weight-confirmation').click()
	cy.contains('Continue').click()
	cy.wait(5000)
})

 //US Citizen Life
it('US Citizen',function(){
 	cy.get('.plate-question').should('to.have','are you a US citizen?')
    cy.contains('Yes').click()
    cy.wait(5000)
    cy.contains('Continue').click()
    cy.wait(3000)
})

//Tobacco Use
it('Tobacco Use',function(){
	cy.get('#hinet-tobacco_use > div:nth-child(1) > label').click()
	cy.wait(5000)
})

//Diabetes
it('Diabetes',function(){
	cy.get('.plate-question').then(($question) => {
    
		if ($question.text().includes('Do you have Diabetes?')) {
		    cy.log('Diabetes plate found') 
		    cy.get('#hinet-no_diabetes > label').click()
		    cy.wait(5000) 
			cy.contains('Save & Next').click()
		} 
		else {
		    	cy.log('Diabetes Plate Not Found')
		}
	cy.wait(5000) 	 
	})
})

//Diagnose Depression Anxiety
it('Diagnose Depression & Anxiety',function(){		   
	cy.get('.plate-question').should('to.have','Have your ever been')
	cy.get('[data-required] .radio-group:nth-of-type(3) [type]').click()
	cy.contains('Save & Next').click()
	cy.wait(6000)  
})

//Asthma Sleep Apnea
it('Asthma Sleep Apnea',function(){
	cy.get('#plate-content > div.plate-question').should('to.have','Have you ever been diagnosed with or treated for')
	cy.get('#diagnose').click()
	cy.contains('Save & Next').click()
	cy.wait(5000)
})

//Has Chronic pain Medication
it('Chronic Pain Medication',function(){
	cy.get('#plate-content > div.plate-question').should('to.have','Do you have any')
	cy.get('#hinet-has_chronic_pain_medication > div:nth-child(2) > label').click()
	cy.contains('Save & Next').click()
	cy.wait(3000)
})

//Heart Attack Stroke Surgery 
it('Heart Attack',function(){
	cy.get('#heart_stroke_surgery').click()
	cy.contains('Save & Next').click()
	cy.wait(3000)
})

 //Select Medical condition
it('Medical Condition',function(){	 	
	cy.get('.plate-question').should('to.have','Are there ANY OTHER medical conditions which you have')
	cy.get(':nth-child(2) > :nth-child(18) > .big').click()
	cy.contains('Save & Next').click()
	cy.wait(5000)
})
//Convicted Of DUI
it('Convicted of DUI',function(){
	cy.get('#plate-content > div.plate-question').should('to.have','In the past 5 years, have you been convicted of a DUI, reckless driving, or had your driver')
	cy.get('#hinet-convicted_of_dui > :nth-child(2) > label').contains('No').click()
	cy.wait(5000)
})

//Driving Violation
it('Driving Violation',function(){
	cy.get('#plate-content > div.plate-question').should('to.have','In the past 2 years, have you received any driving violations')
	cy.get('#hinet-driving_violation > :nth-child(2) > label').contains('No').click()
	cy.wait(5000)
})

	
//Convicted Felony
it('Driving Felony',function(){
	cy.get('#plate-content > div > div.plate-question').should('to.have','In the past 5 years have you pled guilty to or been convicted')
	cy.get('#hinet-convicted_felony > :nth-child(2) > label').contains('No').click()
	cy.wait(5000)
})
	
//Hospital Terminal Illness
it('Hospital Terminal Illness',function(){
	cy.get('#hinet-hospital_terminal_illness > div:nth-child(2) > label').contains('No').click()
	cy.wait(5000)
})

//Search Platform
it('Search Platform',function(){
	cy.get('#assur-value-1').click()
	cy.get('#assur-value-2').click()
	cy.contains('Continue').click()
	cy.wait(5000)
})

//Search Plan
it('Search Plan',function(){
	cy.get('#assur-value-1').click()
	cy.get('#assur-value-2').click()
	cy.get('#assur-value-3').click()
	cy.get('#assur-value-4').click()
	cy.contains('Continue').click()
	cy.wait(5000)
})

//Carrier Value
it('Carrier Value',function(){
	cy.get('#carrier-value-4').click()
	cy.get('#carrier-value-1').click()
	cy.get('#carrier-value-2').click()
	cy.get('#carrier-value-3').click()
	cy.contains('Continue').click()
	cy.wait(5000)
})

//Product Value
it('Product Value',function(){
	cy.get('#term-value-1').click()
	cy.get('#term-value-2').click()
	cy.get('#term-value-3').click()
	cy.get('#term-value-6').click()  
	cy.contains('Continue').click()
	cy.wait(5000)
})

//Life Quotes 
it('Life Quotes',function(){ 	
	cy.get('#term-panel > div:nth-child(3) > div.col-xs-12.col-md-5 > div > div > div.col-lg-4.col-md-12 > div.btn.button.fit.btn-sm.plate-submit.continue-button').click()
	//cy.get('button').contains('Continue').click()
	// cy.get('#term-panel .row:nth-child(3) [class="col-xs-12 col-md-8"] div').contains('Continue').click()
	cy.wait(5000)
 })

 //Perfect fit
 it('perfect fit',function(){
	cy.get('#assur-value-1').click() 
	cy.get('#assur-value-2').click()
	cy.get('#assur-value-3').click()
	cy.get('#assur-value-5').click()
	cy.contains('Continue').click()
})

//Medical Facility
it('Medical Facility',function(){
	cy.get('#assur-nursing_home_hospitalized_2 > div:nth-child(2) > label').contains('No').click()
	cy.contains('Save & Next').click()
	cy.wait(5000)
 })

//STD HIV AIDS
it('STD HIV AIDS',function(){
	cy.get('#assur-std_hiv_aids > div:nth-child(2) > label').contains('No').click()
	cy.wait(5000)
})

//lumico application 1
it('Policy insured',function(){
	cy.get('#plate-content').then(($question) => {
		if($question.text().includes('Are you the person being insured for this policy?')) {
	 		// cy.get('#plate-content > :nth-child(4)').should('have.text','Are you the person being insured for this policy?')
			cy.get('#hinet-is_owner_and_insured > div:nth-child(1) > input').click()
			cy.contains('Save & Next').click()
		} else {
			cy.log('Policy not found')
	 	}
	cy.wait(5000)     
	}) 
})

//lumico Lead
it('Lumico Lead',function(){
	cy.get('#hinet-address').type('123 USA')
	cy.get('#hinet-email').type('Sushila@mailinator.com')
	cy.get('#plate-content').then(($plate)=> {
		if($plate.text().includes('What was the country and state that you were born in?')){
			// cy.select('#hinet-state_born').click()
			cy.get('#hinet-state_born').select('Washington').should('have.value','WA')
			// cy.get('#hinet-state_born > option:nth-child(54)').select('Washington')
			cy.get('#hinet-family_status > div:nth-child(1) > input').click()
			// cy.contains('Save & Next').click()
		} 
		else{ cy.log('not found')
		}

	}) 
	cy.contains('Save & Next').click()
	cy.wait(5000)
})

// lumico Application_3
it('Other Coverage',function(){
	cy.get('#hinet-has_existing_policy > :nth-child(2) > .radio-button').click()
	cy.get('.col-xs-12 > .pull-right > span').contains('Save & Next').click()
	cy.wait(5000) 
})

it('Primary Beneficiaries',function(){
//Lumico Application Primary Beneficiaries
	cy.get('#primary_beneficiary-fname-1').type('Saras')
	cy.get('#primary_beneficiary-lname-1').type('Saud')
	// cy.get('#primary_beneficiary-relationship-1').click()
	cy.get('#primary_beneficiary-relationship-1').select('Child')
	cy.get('#primary_beneficiary-birthdate-1').type('02/03/1998')
	cy.contains('Save & Next').click()
	cy.wait(8000)
})

//Lumico Application Contingent Beneficiaries
it('Contingent Beneficiaries',function(){
	// cy.get('#plate-content').should('have.text','Do you want to add any contingent beneficiaries(optional)?')
	cy.get(':nth-child(2) > .radio-button').click()
	cy.contains('Save & Next').click()
	cy.wait(5000)  
 })

//Rider Department
it('Rider Department',function(){
	cy.get('#plate-content > div:nth-child(4) > div > div > div:nth-child(2) > div:nth-child(3) > button').click()
	cy.wait(500)
 })

//Dependents
it('Dependents',function(){ 
	cy.get('#dependent_child-fname-1').type('Ajit')
	cy.get('#dependent_child-lname-1').type('Shrestha')
	cy.get('#dependent_child-birthdate-1').type('02/03/2012')
	cy.contains('Save & Next').click()
	cy.wait(5000)
})

//Agent Continuation
it('Agent Continuation',function(){
	cy.contains('Proceed to Application').click()
	cy.wait(5000)        
})

//Confirmation Link
it('Confirmation Link',function(){
	cy.get('button').contains('Send Email').click()
	cy.wait(60000)
})

// it('Voice consent',function(){
//     cy.get('#play > div > button').contains('PLAY RECORDING').click()
//     cy.wait(186000)
//     cy.get('#consent-checkbox1').click()
//     cy.get('#consent-checkbox2').click()
//     cy.get('#consent-checkbox').click()
//     cy.get('#consent-proceed').contains('Proceed to Application').click()

// })

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  






})