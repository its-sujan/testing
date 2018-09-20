 //Author:Sujan
 //Active License
 //visualstudiocode //Gitlens //201374

import Chance from 'chance';

 it('Clear Cookies', function() {
		cy.clearCookies()	
	});

describe('Agent Role for Health type',function(){

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
		// cy.get('.payment-failed-title > .mdl-card__title-text').should('have.text', 'Qa Agent')
		cy.wait(5000)
		cy.visit('https://staging.assurance.com/rep/plate?lead_id=201325')
		cy.get('#rep-plates-nav-bar-launcher > :nth-child(2)').should('to.contain','Navigation')

  })

 beforeEach(function () {

    Cypress.Cookies.preserveOnce("_insurance_session", "remember_token")
  })

	it('Objections', function() {
	 	
	 	
	 	cy.log('Button--> Objection ')	 	
	 	cy.get('#rep-plates-objection-launcher > :nth-child(2)').click()
	 	cy.get('#agent-objection-dialog > .mdc-dialog__surface > .mdc-dialog__header > .mdc-dialog__header__title')	.should('have.text','Objections')
	 	// cy.pause()
	 	cy.get('#agent-objection-dialog > .mdc-dialog__surface > .mdc-dialog__footer > .mdc-button').click()
	 	cy.wait(2000)

	})	
	
	it('Reminder-->Fill Data', function() {

		cy.log('Button-->Reminder')
		cy.get('#rep-plates-actions-launcher > :nth-child(2)').click()
		cy.get('#rep-plates-actions-menu-reminders').click()
		cy.get('#select-tommorow').click()
		cy.get('#task_description').type('Remind me about this task')
		cy.get('.form-group > .button').click()
		cy.get('.modal-footer > .btn-default').click()

	})
		
	it('Reminder-->Close', function() {
		
		cy.get('#rep-plates-actions-launcher > :nth-child(2)').click()
		cy.get('#rep-plates-actions-menu-reminders').click()
		cy.get('#close-button > .fa').click()
	})

	it('Referal', function() {

		cy.log('Button-->Referal')
		cy.get('#rep-plates-actions-launcher > :nth-child(2)').click()
		cy.get('#rep-plates-actions-menu-referral').click()
		cy.get('.mdc-dialog__surface > .mdc-dialog__body > .mdc-layout-grid > :nth-child(1) > .mdc-layout-grid__cell--span-12 > .mdc-select > .mdc-select__selected-text').click()
		cy.get('[style="transition-delay: 0.167s;"]').click()
		cy.get(':nth-child(3) > :nth-child(1) > .mdc-textfield > .mdc-textfield__input').type(fname)
		cy.get('.mdc-textfield > #dob').type('10/18/1985')
		cy.get('#a-related-policy-radio-female').click()
		cy.get(':nth-child(8) > .mdc-layout-grid__cell--span-12 > .mdc-textfield > .mdc-textfield__input').type(lname)
		cy.get('#related-policy-dialog > .mdc-dialog__surface > .mdc-dialog__footer > .mdc-dialog__footer__button--cancel').click()
		//	cy.get('.related-policy-create').click()
	})

	it('Notes', function() {

		cy.log('Button-->Notes')
		cy.get('#rep-plates-notes-launcher > :nth-child(2)').click()
		cy.get('#rep-plates-drawer-content > #rep-plates-notes-bar > form > .form-group > #rep-plates-notes-bar-text-area').type('Life Insurance')
		cy.get('#rep-plates-drawer-content > #rep-plates-notes-bar > form > .btn').click()
	})	
		
	it('Profile', function() {

		cy.log('Button-->Profile')
		cy.get('#rep-plates-profile-launcher').click()
		cy.get('#rep-plates-lead-info-bar > div:nth-child(1) > h4').should('to.contain','Health Insurance')

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(2) > #rep-plates-lead-info-bar-edit-name').click()
		cy.get('#edit-plates-profile-update-name-button').click()

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(6) > #rep-plates-lead-info-bar-edit-dob').click()
		cy.get('#edit-plates-profile-update-dob-button').click()

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(8) > #rep-plates-lead-info-bar-edit-gender').click()
		cy.get('#edit-plates-profile-update-gender-button').click()

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(9) > #rep-plates-lead-info-bar-edit-height').click()
		cy.get('#edit-plates-profile-update-height-button').click()
		
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(10) > #rep-plates-lead-info-bar-edit-weight').click()
		cy.get('#edit-plates-profile-edit-weight > div.mdc-dialog__body.edit-plates-profile-body > div > div > div > div > input').clear().type('145')
		cy.get('#edit-plates-profile-update-weight-button').click()
		cy.wait(5000)

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(13) > #rep-plates-lead-info-bar-edit-city').click()
		cy.get('#edit-plates-profile-update-location-button').click()

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(14) > #rep-plates-lead-info-bar-edit-state').click()
		cy.get('#edit-plates-profile-update-location-button').click()

		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > :nth-child(15) > #rep-plates-lead-info-bar-edit-zip').click()
		cy.get('#edit-plates-profile-update-location-button').click()

	Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    })
	})


	it('View Full Profile', function() {

		cy.log('Profile-->View Full Profile')
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(1) > #lead-info-bar-full-profile-launcher').click()
		cy.wait(3000)
		cy.get('.panel-heading > .nav > :nth-child(2) > a').click()
		cy.wait(5000)
		cy.get('.panel-heading > .nav > :nth-child(3) > a').click()
		cy.wait(5000)
		cy.get('.panel-heading > .nav > :nth-child(4) > a').click()
		cy.wait(5000)
		cy.get('.panel-heading > .nav > :nth-child(5) > a').click()
		cy.wait(5000)
		cy.get('.close-icon-right > .fa-stack > .fa').click()
		cy.wait(2000)
	})
	
	it('Call', function() {

		cy.log('Profile-->Call')
		cy.get('#rep-plates-drawer-content > #rep-plates-lead-info-bar > :nth-child(2) > .mask-wrapper > .phone-mask > .btn').click()
		cy.get('#click-to-call-dialog_content > h3').should('to.contain','Call')
		cy.wait(2000)
		cy.get('#cancel-button > .mdl-button__ripple-container').click()
		// cy.pause()
		// cy.get('#ok-button > .mdl-button__ripple-container').click()
		// cy.pause()	
	})

	it('Navigation', function() {
		
		cy.log('Button-->Navigation')
		cy.get('#hinet-coverage_type > :nth-child(1) > label').click()
		cy.get('#rep-plates-nav-bar-launcher > :nth-child(2)').click()
		cy.wait(2000)

		cy.get('#rep-plates-drawer-content > #rep-plates-plate-nav-bar > #plates > :nth-child(3) > .plate-name > span').click()
		cy.wait(4000)

		cy.get('#rep-plates-drawer-content > #rep-plates-plate-nav-bar > #plates > :nth-child(4) > .plate-name > span').click()
		cy.wait(4000)

		cy.get('#rep-plates-drawer-content > #rep-plates-plate-nav-bar > #plates > :nth-child(29) > .plate-name > span').click()
		cy.wait(4000)
		
		cy.get('#rep-plates-nav-bar-launcher > :nth-child(2)').click()
		// cy.get('#rep-plates-profile-launcher').click()
		// cy.get('#rep-plates-drawer-close > .material-icons').click()
		cy.log('Test Completed')
	})

})
