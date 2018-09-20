import Chance from 'chance';

it('Clear Cookies', function() {
	cy.clearCookies()	
})

describe('Health Flow by Agent',function(){

	const chance = new Chance();
	const fname = chance.first();
	const lname = chance.last();
	


	before(function () {
		cy.visit('https://staging.assurance.com/')
		cy.get('div.cell.small-6.medium-2.large-1.text-right > p > a').should('have.text', 'Sign in')
		cy.viewport(1280,720)				
		cy.contains('Sign in').click()
		cy.get('[type="email"]').type('qa_agentflow_rep@assurance.com')
		cy.get('[type="password"]').type('Msure--44')
		cy.contains('Log In').click()
		cy.get('#agent_navbar > :nth-child(1) > :nth-child(1) > a').should('have.text', 'Dashboard')
	})

	beforeEach(function () {

		Cypress.Cookies.preserveOnce("_insurance_session", "remember_token")
	})

	it('Visit Lead',function(){

		cy.visit('https://staging.assurance.com/rep/plate?lead_id=201375')	

	})

	it('Top Bar Menu > Notes , Profile and Navigation',function(){

		cy.get('#rep-plates-notes-launcher > :nth-child(2)').should('to.contain','Notes')
		cy.get('#rep-plates-profile-launcher > :nth-child(2)').should('to.contain','Profile')
		cy.get('#rep-plates-nav-bar-launcher > :nth-child(2)').should('to.contain','Navigation')

	})

	it('Notes',function(){	
		 
		cy.get('#rep-plates-notes-launcher > :nth-child(2)').click()
		cy.get('#rep-plates-drawer-content > #rep-plates-notes-bar > form > .form-group > #rep-plates-notes-bar-text-area').type('Medicare Insurance')
		cy.get('#rep-plates-drawer-content > #rep-plates-notes-bar > form > .btn').click()

	})
		
	it('Profile > Polices',function(){
		
		cy.get('#rep-plates-profile-launcher').click()
		cy.get('#rep-plates-lead-info-bar > div:nth-child(1) > h4').should('to.contain','Medicare Insurance')
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(1) > #lead-info-bar-full-profile-launcher').click()
		cy.wait(3000)

	})

		it('Profile > Personal Information',function(){	
			
		cy.get('.panel-heading > .nav > :nth-child(2) > a').click()
		cy.wait(5000)

	})

	it('Profile > Activity',function(){		
		
		cy.get('.panel-heading > .nav > :nth-child(3) > a').click()
		cy.wait(5000)

	})

	it('Profile > Notes',function(){
		
		cy.get('.panel-heading > .nav > :nth-child(4) > a').click()
		cy.wait(5000)

	})

	it('Profile > Action',function(){
			
		cy.get('.panel-heading > .nav > :nth-child(5) > a').click()
		cy.wait(5000)

	})

	it('Profile > Close Profile',function(){
			
		cy.get('.close-icon-right > .fa-stack > .fa').click()
		cy.wait(2000)

	})

	it('Side Nav Bar > Edit Name',function(){
		
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(2) > #rep-plates-lead-info-bar-edit-name').click()
		cy.get('#edit-plates-profile-edit-name-close').click()

	})

	it('Side Nav Bar > Edit DOB',function(){		
		
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(6) > #rep-plates-lead-info-bar-edit-dob').click()
		cy.get('#edit-plates-profile-edit-dob-close').click()

	})

	it('Side Nav Bar > Edit Gender',function(){	
		
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(8) > #rep-plates-lead-info-bar-edit-gender > .material-icons').click()
		cy.get('#edit-plates-profile-edit-gender-close').click()

	})
		
	it('Side Nav Bar > Edit Height',function(){	
		
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(9) > #rep-plates-lead-info-bar-edit-height > .material-icons').click()
		cy.get('#edit-plates-profile-edit-height-close').click()

	})		
		
	it('Side Nav Bar > Edit Weight',function(){	
		
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(10) > #rep-plates-lead-info-bar-edit-weight > .material-icons').click()
		cy.get('#edit-plates-profile-edit-weight-close').click()

	})

	it('Side Nav Bar > Edit City',function(){	
		
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(13) > #rep-plates-lead-info-bar-edit-city > .material-icons').click()
		cy.get('#edit-plates-profile-edit-city-close').click()

	})
		
	it('Side Nav Bar > Edit State',function(){

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(13) > #rep-plates-lead-info-bar-edit-city > .material-icons').click()
		cy.get('#edit-plates-profile-edit-city-close').click()

	})

	it('Side Nav Bar > Edit Zip',function(){
		
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(15) > #rep-plates-lead-info-bar-edit-zip > .material-icons').click()
		cy.get('#edit-plates-profile-edit-city-close').click()

	})

	it('Call',function(){
			
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > .mask-wrapper > .phone-mask > .btn').click()
		cy.wait(2000)
		cy.get('#click-to-call-dialog_content > h3').should('to.contain','Call')
		cy.get('#ok-button > .mdl-button__ripple-container').click()	
		cy.wait(5000)

	})	
		
	it('Navigation',function(){	
	
		cy.get('#rep-plates-nav-bar-launcher > :nth-child(2)').click()
		cy.wait(2000)

	})
	
	it('Navigation > Medicare Landing Script',function(){		
		
		cy.get('#rep-plates-drawer-content > #rep-plates-plate-nav-bar > #plates > :nth-child(1) > .plate-name > span').should('to.contain','Medicare Landing Script').click()
		cy.wait(4000)
	})

	it('Navigation > Call Transfer Only Redirect',function(){		
		
		cy.get('#rep-plates-drawer-content > #rep-plates-plate-nav-bar > #plates > :nth-child(2) > .plate-name > span').should('to.contain','Call Transfer Only Redirect').click()
		cy.wait(4000)
		cy.log('Test Completed')
	})

})