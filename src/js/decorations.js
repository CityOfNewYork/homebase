const decorations = {
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