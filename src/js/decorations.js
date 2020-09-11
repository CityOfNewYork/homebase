import $ from 'jquery'

const decorations = {
	extendFeature() {
		this.set(
			'search_label',
			`<b><span class="srch-lbl-lg">${this.getName()}</span></b><br>` +
			`<span class="srch-lbl-sm">${this.getAddress1()}</span>`
		)
		this.set('search_name', `${this.getName()}, ${this.getAddress1()}, ${this.getCityStateZip()}`)
	},
	getName() {
    return this.get('Provider').toUpperCase()
	},
	getAddress1() {
		return this.get('Address')
	},
	getBorough() {
		return this.get('Borough')
	},
	getCityStateZip() {
		return `${this.getBorough()}, NY ${this.getZip()}`
	},
  getPhone() {
		return this.get('Phone Number')
	},
	getZip() {
		return this.get('Postcode')
	},
	detailsHtml() {
		const html = $('<div></div>')
		const servZip = this.get('Service Area Zip Code')

		return html.append(`<div class="zips"><strong>Serving ZIP Codes: </strong>${servZip}</div>`)
	}
}

export default decorations