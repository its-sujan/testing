import Chance from 'chance';

it('Clear Cookies', function() {
	cy.clearCookies()	
})

describe('Life flow by Agent',function(){

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

		cy.visit('https://staging.assurance.com/rep/plate?lead_id=201374')	

	})

	
	it('Top Bar Menu > Notes , Profile and Navigation',function(){

		cy.get('#rep-plates-notes-launcher > :nth-child(2)').should('to.contain','Notes')
		cy.get('#rep-plates-profile-launcher > :nth-child(2)').should('to.contain','Profile')
		cy.get('#rep-plates-nav-bar-launcher > :nth-child(2)').should('to.contain','Navigation')

	})

	it('Notes',function(){
		
		cy.get('#rep-plates-notes-launcher > :nth-child(2)').click()
		cy.get('#rep-plates-drawer-content > #rep-plates-notes-bar > form > .form-group > #rep-plates-notes-bar-text-area').type('Life Insurance')
		cy.get('#rep-plates-drawer-content > #rep-plates-notes-bar > form > .btn').click()
	
	})

	it('Profile',function(){	
		
		cy.get('#rep-plates-profile-launcher').click()
		cy.get('#rep-plates-lead-info-bar > div:nth-child(1) > h4').should('to.contain','Life Insurance')
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(1) > #lead-info-bar-full-profile-launcher').click()
		cy.wait(3000)

	})

	it('Personal Information',function(){	
		
		cy.log('Profile > Personal Information')
		cy.get('.panel-heading > .nav > :nth-child(2) > a').click()
		cy.wait(5000)

	})

	it('Activity',function(){
		
		cy.get('.panel-heading > .nav > :nth-child(3) > a').click()
		cy.wait(5000)

	})

	it('Notes',function(){

		cy.get('.panel-heading > .nav > :nth-child(4) > a').click()
		cy.wait(5000)

	})

	it('Action',function(){	

		cy.get('.panel-heading > .nav > :nth-child(5) > a').click()
		cy.wait(5000)

	})

	it('Close Profile',function(){	

		cy.get('.close-icon-right > .fa-stack > .fa').click()
		cy.wait(2000)

	})
		
	it('Edit Name',function(){	

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(2) > #rep-plates-lead-info-bar-edit-name').click()
		cy.get('#edit-plates-profile-edit-name > .mdc-dialog__body > .mdc-layout-grid > :nth-child(1) > .mdc-layout-grid__cell--span-12 > .mdc-textfield > .mdc-textfield__input').clear().type(fname)
		cy.get(':nth-child(2) > .mdc-layout-grid__cell--span-12 > .mdc-textfield > .mdc-textfield__input').clear().type(lname)
		cy.wait(2000)
		cy.get('#edit-plates-profile-update-name-button').click()

	})	

	it('Edit DOB',function(){	

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(6) > #rep-plates-lead-info-bar-edit-dob').click()
		cy.get('#edit-plates-profile-edit-dob > .mdc-dialog__body > .mdc-layout-grid > .mdc-layout-grid__inner > .mdc-layout-grid__cell--span-12 > .mdc-textfield > .mdc-textfield__input').clear().type('01/01/1990')
		cy.wait(2000)
		cy.get('#edit-plates-profile-update-dob-button').click();

	})	
		
	it('Edit Gender',function(){

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(8) > #rep-plates-lead-info-bar-edit-gender > .material-icons').click()
		cy.get('.mdc-layout-grid__cell--span-12 > [name="radio-field-female"]').click()
		cy.wait(2000)
		cy.get('#edit-plates-profile-update-gender-button').click()

	})

	it('Edit Height',function(){	

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(9) > #rep-plates-lead-info-bar-edit-height > .material-icons').click()
		cy.get('#edit-plates-profile-height-select').click().get('[value="67"]').click()
		cy.get('#edit-plates-profile-update-height-button').click()
		cy.wait(8000)

	})			
		
	it('Edit Weight',function(){	

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(10) > #rep-plates-lead-info-bar-edit-weight > .material-icons').click()
		cy.get('#edit-plates-profile-edit-weight > .mdc-dialog__body > .mdc-layout-grid > .mdc-layout-grid__inner > .mdc-layout-grid__cell--span-12 > .mdc-textfield > .mdc-textfield__input').type('150')
		cy.get('#edit-plates-profile-update-weight-button').click()
		cy.wait(8000)

	})
		
	it('Edit City',function(){

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(13) > #rep-plates-lead-info-bar-edit-city > .material-icons').click()
		cy.get('#edit-plates-profile-edit-city > .mdc-dialog__body > .mdc-layout-grid > .mdc-layout-grid__inner > .mdc-layout-grid__cell--span-12 > .mdc-textfield > .mdc-textfield__input').clear().type('Bellevue')
		cy.get('#edit-plates-profile-update-location-button').click()
		cy.wait(8000)

	})
		
	it('Edit State',function(){	

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(13) > #rep-plates-lead-info-bar-edit-city > .material-icons').click()
		cy.get('#edit-plates-profile-cancel-button').click()
		cy.wait(8000)

	})
		
	it('Edit Zip',function(){	

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(15) > #rep-plates-lead-info-bar-edit-zip > .material-icons').click()
		cy.get('#edit-plates-profile-edit-zip > .mdc-dialog__body > .mdc-layout-grid > .mdc-layout-grid__inner > .mdc-layout-grid__cell--span-12 > .mdc-textfield > .mdc-textfield__input').clear().type('98004')
		cy.get('#edit-plates-profile-update-location-button').click()
		cy.wait(8000)
	})

		
	it('Call',function(){	

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > .mask-wrapper > .phone-mask > .btn').click()
		// cy.wait(2000)
		// cy.get('#click-to-call-dialog_content').should('to.contain','Call')
		cy.get('#ok-button > .mdl-button__ripple-container').click()
		cy.wait(2000)

	})
		
	it('Navigation',function(){	

		cy.get('#rep-plates-nav-bar-launcher > :nth-child(2)').click()
		cy.wait(2000)

	})
		
	it('Navigation > Occupation Status',function(){

		cy.get('#rep-plates-drawer-content > #rep-plates-plate-nav-bar > #plates > :nth-child(3) > .plate-name > span').click()
		cy.wait(4000)

	})
		
	it('Navigation > Height',function(){

		cy.get('#rep-plates-drawer-content > #rep-plates-plate-nav-bar > #plates > :nth-child(4) > .plate-name > span').click()
		cy.wait(4000)

	})
		
	it('Navigation > Weight',function(){

		cy.get('#rep-plates-drawer-content > #rep-plates-plate-nav-bar > #plates > :nth-child(5) > .plate-name').click()
		cy.wait(4000)

	})
		
	it('Navigation > Birthdate',function(){

		cy.get('#rep-plates-drawer-content > #rep-plates-plate-nav-bar > #plates > :nth-child(6) > .plate-name').click()
		cy.wait(4000)
		cy.get('#rep-plates-nav-bar-launcher > :nth-child(2)').click()
		cy.get('#rep-plates-profile-launcher').click()
		cy.get('#rep-plates-drawer-close > .material-icons').click()
		cy.log('Test Completed')		

	})
	
	

})