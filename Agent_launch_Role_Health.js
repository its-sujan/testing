import Chance from 'chance';
it('Clear Cookies', function() {
		cy.clearCookies()	
	});

describe('Health flow by Agent Launch',function(){

		const chance = new Chance();
		const fname = chance.first()
		const lname = chance.last()
		const phone = chance.phone()
		

	before(function(){
		
		cy.visit('http://staging.assurance.com')
		cy.contains('Sign in').click()
		cy.get('[type="email"]').type('qa_agentflow_launch@assurance.com')
		cy.get('[type="password"]').type('Msure--44')
		cy.get('.auth0-label-submit').contains('Log In').click() 
		cy.wait(8000)
		cy.viewport(1280,720)	
		cy.visit('https://staging.assurance.com/rep/plate?lead_id=201377')
		cy.wait(5000)
	})

	beforeEach(function () {

    Cypress.Cookies.preserveOnce("_insurance_session", "remember_token")
  })
    

	//Click to Notes Icon
	it('Update Notes',function(){ 
		cy.log('Notes')
		cy.get('#rep-plates-notes-launcher > div:nth-child(2)').click()
		cy.get('.vertically-scrollable textarea').type('Adding the notes for Health insurance')
		cy.get('.vertically-scrollable [type="submit"]').click()
		cy.get('#rep-plates-drawer-close > i').click()
		cy.wait(3000)
	})

	// Click to Profile info
	it('Profile',function(){
		cy.log('Profile')
			cy.get('#rep-plates-profile-launcher .material-icons').click()
		})

	it('View Full Profile',function(){
		cy.log('Profile > View Full Profile')
		cy.get('#lead-info-bar-full-profile-launcher').click()

		cy.wait(5000)
		cy.get('.panel-heading > .nav > :nth-child(2) > a')
		cy.wait(5000)
		cy.get('.panel-heading > .nav > :nth-child(3) > a').click()
		cy.wait(5000)
		cy.get('.panel-heading > .nav > :nth-child(4) > a')
		cy.wait(5000)
		cy.get('#tabs > div > div > ul > li:nth-child(5) > a').click()
		cy.wait(5000)
		cy.get('#customer_profile_modal > div > div > div > div.close-icon-right.pointer > span > i').click()
		cy.wait(5000)
	})

	//click the icon to update the profile
	it('Name',function(){
		cy.log('profile > edit Name')
		cy.get('#rep-plates-lead-info-bar-edit-name').click()
		cy.get ('#edit-plates-profile-edit-name .mdc-layout-grid__inner:nth-of-type(1) .mdc-textfield__input').clear()
		cy.get ('#edit-plates-profile-edit-name .mdc-layout-grid__inner:nth-of-type(1) .mdc-textfield__input').type(fname)
		cy.get('#edit-plates-profile-edit-name .mdc-layout-grid__inner:nth-of-type(2) .mdc-textfield__input').clear()
		cy.get('#edit-plates-profile-edit-name .mdc-layout-grid__inner:nth-of-type(2) .mdc-textfield__input').type(lname)
		cy.get('#edit-plates-profile-update-name-button').click()
		cy.wait(5000)
	})

	it('Date of Birth',function(){
		cy.log('profile > edit DOB') 
		cy.get('#rep-plates-lead-info-bar-edit-dob').click()
		cy.get('#edit-plates-profile-edit-dob .mdc-textfield__input').type('02/06/1989')
		cy.get('#edit-plates-profile-update-dob-button').click()
		cy.wait(5000)
		})

	it('Gender',function(){ 
		cy.log('profile > Gender')
		cy.get('#rep-plates-lead-info-bar-edit-gender').click()
		cy.get('#edit-plates-profile-update-gender-button').click()
		cy.wait(5000)
		})
	it('Height',function(){
		cy.log('profile > edit Height')
		cy.get('#rep-plates-lead-info-bar-edit-height').click()
		cy.get('#edit-plates-profile-height-select').click()
		cy.get('#edit-plates-profile-edit-height .mdc-simple-menu__items [role="option"]:nth-of-type(22)').click()
		cy.get('#edit-plates-profile-update-height-button').click()
		cy.wait(5000)
	})
	it('City',function(){
		cy.log('profile > edit City')
		cy.get('#rep-plates-lead-info-bar-edit-city').click()
		cy.get('#edit-plates-profile-edit-city .mdc-textfield__input').clear()
		cy.get('#edit-plates-profile-edit-city .mdc-textfield__input').type('Bancs')
		cy.get('#edit-plates-profile-update-location-button').click()
		cy.wait(5000)
   })
		
	it('State',function(){
		cy.log('profile > edit State')
		cy.get('#rep-plates-lead-info-bar-edit-state').click()
		cy.get('#edit-plates-profile-state-select').click()
		cy.get('#edit-plates-profile-state-select > div > ul > li:nth-child(2)').click()
		cy.get('#edit-plates-profile-update-location-button').click()
		cy.wait(5000)
	})

	it('Zip',function(){
		cy.log('profile > edit Zip') 
		cy.get('#rep-plates-lead-info-bar-edit-zip').click()
		cy.get('#edit-plates-profile-edit-zip .mdc-textfield__input').clear()
		cy.get('#edit-plates-profile-edit-zip .mdc-textfield__input').type('36005')
		cy.get('#edit-plates-profile-update-location-button').click()


		cy.wait(5000)
		cy.get('#rep-plates-drawer-close').click()
	})

	
 
		//Navigation button
	// cy.log('Navigation')
	it('Navigation',function(){
		cy.wait(3000)
		// cy.get('#plate-content > .row > :nth-child(1) > .btn').contains('Health').click()
		cy.get('#rep-plates-nav-bar-launcher > div:nth-child(2)').click()

		// cy.log('Testing Completed')
		      })     
	
	})