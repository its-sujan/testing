	/// <reference types="Cypress" /> //Author:Sujan
import Chance from 'chance';

it('Clear Cookies', function() {
  		cy.clearCookies()
 	})

	
describe('Agent Health Flow',function(){

	const chance = new Chance();
	const fname = chance.first()
	const lname = chance.last()
	


 before(function () {
 		cy.visit('https://staging.assurance.com/')
		cy.get('div.cell.small-6.medium-2.large-1.text-right > p > a').should('have.text', 'Sign in')
		cy.viewport(1280,720)				
		cy.contains('Sign in').click()
		cy.get('[type="email"]').type('sujan@assurance.com')
		cy.get('[type="password"]').type('Assurance1')
		cy.contains('Log In').click()
		cy.get('div > a > ul > li > span').should('have.text', 'Leads')
		cy.visit('https://staging.assurance.com/rep/plate')

  })

 beforeEach(function () {

    Cypress.Cookies.preserveOnce("_insurance_session", "remember_token")
  })


	it('Health',function(){

		cy.get('#plate-content > h3').should('have.text', 'What type of insurance are you interested in?')
		cy.contains('Health').click()
		// cy.wait(2000)
		 
	})		
		//Individual
	it('Individual',function(){

		cy.get('#plate-content > h3').should('have.text', 'Are you looking for individual or family coverage?')
		cy.contains('Individual').click()
		cy.wait(2000)
	})

				
		//Health Coverage
	it('Health Coverage',function(){
		
		cy.get('#plate-content > h3').should('have.text', 'Do you currently have health coverage?')
		cy.get('#hinet-has_existing_policy > :nth-child(2) > label').click()  // Select --> No
		// cy.wait(2000)
	})

		//Assurance
	it('Assurance',function(){

		cy.get('#plate-content > h3').should('have.text', 'Have you purchased from Assurance before?')
		cy.get('#hinet-purchased_from_assurance > :nth-child(2) > label').click()	// Select --> No
		// cy.wait(2000)
	})

		//About Assurance
	it('About Assurance',function(){
		
		cy.get('#plate-content > :nth-child(2)').should('have.text', 'Great, let me tell you about Assurance:')
		cy.get('#assur-value-1').click()
		cy.wait(500)
		cy.get('#assur-value-2').click()
		cy.wait(500)
		cy.get('#assur-value-3').click()
		cy.wait(500)
		cy.get('#assur-value-4').click()
		cy.contains('Continue').click()
		cy.wait(1000)

		cy.get('#script-1').click()
		cy.wait(500)
		cy.get('#script-2').click()
		cy.contains('Continue').click()
		// cy.wait(1000)
	})

		// PErson Details
	it('Person Details',function(){

		cy.get('#plate-content ').should('to.contain', 'I need to confirm the spelling ')
		cy.get('#hinet-fname').type(fname)
		cy.get('#hinet-lname').type(lname)
		cy.get('#hinet-phone').type("4256546557")
		cy.get('#hinet-email').type(fname).type("@mailinator.com")
		cy.log(fname,'@mailinator.com')
		cy.contains('Save & Next').click()
		// cy.wait(2000)
	})	
		//Medical Conditions
	it('Medical Conditions',function(){

		cy.get('#plate-content > h3').should('have.text', 'Do you have any medical conditions or are you taking any medications?')
		cy.pause()
		cy.get(':nth-child(1) > .big').click()		//Select --> No
		cy.contains('Save & Next').click()
		// cy.wait(2000)
	})

		//Height/weight
	it('Height/weight',function(){

		cy.get('.col-md-12 > .plate-question').should('to.contain', 'What is your height/weight?')
		cy.get('#hinet-height_feet').type('5')
		cy.get('#hinet-height_inch').type('6')
		cy.get('#hinet-weight').type('145')
		cy.contains('Continue').click()
		// cy.wait(2000)
	})	

		//Income
	it('Income',function(){

		cy.get('#plate-content > h3').should('have.text', 'What is your total household income?')
		cy.get(':nth-child(2) > .big').click()		//Select --> $30,001 - $47,000
		cy.contains('Save & Next').click()
		// cy.wait(2000)
	})
		
		//Tobacco Product
	it('Tobacco Product',function(){

		cy.get('#plate-content > h3').should('have.text','Have you used Tobacco Products within the last 12 months?')
		cy.get(':nth-child(2) > .big').click()   //Select -->No
		cy.contains('Save & Next').click()	
		// cy.wait(2000)
	})
		//Gender
	it('Gender',function(){

		cy.get('.plate-question').should('have.text','What is your gender?')
		cy.contains('Male').click()
		cy.wait(2000) 
	})

		//Date_of_Birth
	it('Date_of_Birth',function(){

		cy.get('.assur-plate-birthdate_mixed_inputs > h3').should('to.contain', 'I need to confirm your date of birth is')
		cy.get('#hinet-birth_month').select('July')
		cy.get('#hinet-birth_day').type('22')
		cy.get('#hinet-birth_year').type('1956')
		cy.contains('Save & Next').click()	
		// cy.wait(2000)
	})
		//Address
	it('Address',function(){

		cy.get('#plate-content > h3').should('have.text','Ok, let me confirm your residential address')
		cy.get('#hinet-autocomplete').type('12 Bridge St. ')
		cy.get('#hinet-subpremise').type('12')
		cy.get('#hinet-city').type('Desoto')
		cy.get('#hinet-state').select('California')
		// cy.pause()
		cy.get('#goog-zip').type('90001')
		cy.contains('Save & Next').click()	
		// cy.wait(2000)
	})
		
		//Spouse
	it('Spouse',function(){

		cy.get('.plate-question').should('to.contain','Are you looking to include your')
		cy.get('#assur_cover_spouse_false').click()  	//Select --> No
		cy.contains('Save & Next').click()	
		// cy.wait(3000)
	})
		//Children
	it('Children',function(){
		
		cy.get('.plate-question').should('to.contain','Are you looking to include')
		cy.get('#assur_cover_spouse_false').click()  	//Select --> No
		cy.contains('Save & Next').click()			
		// cy.wait(2000)
	})

		// Personalized Coverage -1
	it('Personalized Coverage -1',function(){

		cy.get(':nth-child(2) > .plate-checkbox > .row > .col-xs-9').should('to.contain','Great, now')
		cy.get(':nth-child(2) > .plate-checkbox > .row > .col-xs-2 > .radio-group > #assur-value-1').click()
		cy.get(':nth-child(3) > .plate-checkbox > .row > .col-xs-2 > .radio-group > #assur-value-1').click()
		cy.contains('Continue').click()
		// cy.wait(1000)
	})	

		//Personalized Coverage -2
	it('Personalized Coverage -2',function(){
		
		cy.get('#plate-content > div:nth-child(2) > label > div > div.col-xs-9.col-sm-10').should('to.contain','Based on your')
		cy.get('#carrier-value-4').click()
		cy.wait(500)
		cy.get('#carrier-value-1').click()
		cy.wait(500)
		cy.get('#carrier-value-2').click()
		cy.wait(500)
		cy.get('#carrier-value-3').click()
		cy.wait(500)
		cy.get('#carrier-value-5').click()
		cy.wait(500)
		cy.contains('Continue').click()
		// cy.wait(2000)
	})

		//Personalized Coverage -3
	it('Personalized Coverage -3',function(){
		
		cy.get('#plate-content > div:nth-child(2) > label > div > div.col-xs-9.col-sm-10').should('to.contain','The policy is called')
		cy.get('#assur-value-1').click()
		cy.wait(500)
		cy.get('#assur-value-2').click()
		cy.wait(500)
		cy.contains('Continue').click()
		// cy.wait(2000)
	})

		//Personalized Coverage -4
	it('Personalized Coverage -4',function(){

		cy.get(':nth-child(2) > .plate-checkbox > .row > .col-xs-9').should('to.contain','Your network,')
		cy.get('#assur-value-1').click()
		cy.wait(500)
		cy.get('#assur-value-2').click()
		cy.wait(500)
		cy.get('#assur-value-3').click()
		cy.wait(500)
		cy.contains('Continue').click()
		// cy.wait(2000)
	})
		
		//Personalized Coverage -5
	it('Personalized Coverage -5',function(){

		cy.get(':nth-child(2) > .plate-checkbox > .row > .col-xs-9').should('to.contain','This plan')
		cy.get('#assur-value-1').click()
		cy.wait(500)
		cy.get('#assur-value-2').click()
		cy.wait(500)
		cy.get('#assur-value-3').click()
		cy.wait(500)
		cy.contains('Continue').click()
		// cy.wait(1000)
	})
		//Personalized Coverage -6

	it('Personalized Coverage -6',function(){

		cy.get(':nth-child(2) > .plate-checkbox > .row > .col-xs-9').should('to.contain','This plan also provides prescription')
		cy.get('#assur-value-1').click()
		cy.wait(500)
		cy.get('#assur-value-2').click()
		cy.wait(500)
		cy.get('#assur-value-3').click()
		cy.contains('Continue').click()
		// cy.wait(3000)
	})	

	it('Quote Suggestion',function(){
	
		cy.get('.plate-question').should('to.contain','Suggest a suitable quote')
		cy.get(':nth-child(8) > #headingOne > .row').click()
		//cy.pause()
		cy.get('#collapse2 > div > div > div > div:nth-child(11) > div > button').contains('APPLY NOW').click()
		//cy.get('#agent-value-2').click()
		//cy.contains('Continue').click()
	})

		//Primary Applicant Information
	it('Primary Applicant Information',function(){
	
		cy.get('#plate-content > div.row > div.col-xs-12.col-sm-8 > h2').should('to.contain','Primary Applicant Information')
		cy.contains('Continue').click()

	})
	
		//How would you like to pay?
	it('Payment Option',function(){

		cy.get('.col-sm-8 > .bold').should('to.contain','How would you like to pay')
		cy.get('#assur-card_number').type('4929358360516076')
		cy.get('#assur-card_expiration_month').select('9')
		cy.get('#assur-card_expiration_year').select('2020')
		// cy,get('#assur-policy_effective_date').click()
		// cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
		cy.get('#assur-policy_effective_date').invoke('show').click()		//For Date Picker
		cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
		cy.get('#hinet-esign_send_method > :nth-child(1) > .big').click()
		// const todaysDate = Cypress.moment().format("MM/DD/YYYY")
		// cy.get('#assur-policy_effective_date').type(todaysDate)
		// cy.get('#assur-policy_effective_date').type('/')
		// cy.get('#assur-policy_effective_date').type('10')
		// cy.get('#assur-policy_effective_date').type('/')
		// cy.get('#assur-policy_effective_date').type('2018')

		// cy.get('#ui-datepicker-div > table > tbody > tr:nth-child(4) > td:nth-child(4) > a').click('')
		//cy.get('#assur-policy_effective_date').get('#ui-datepicker-div > table > tbody > tr:nth-child(3) > td:nth-child(6) > a').click()
		cy.wait(1000)
		cy.get('#assur-submit_application').click()
		// cy.wait(60000)
		// cy.log('Success/Error message is not shown')



	
	 	// cy.request('rep/plate')
		// cy.server()
		// cy.route('https://staging.assurance.com/rep/plate')

	})

	// it('Plate Fillup',function(){
	// 	cy.getCookies('session_id') 

	// 	cy.contains('Life').click()
		

	// })

})
