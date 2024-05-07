const { AbstractController } = require("./abstractController");

class Facebook extends AbstractController {

	constructor() {
		super(type);
		this.name = "facebook";
		this.config = config;
		this.facebookg = config.facebook;
		this.model = new (require(this.config.model).ModelFactory.createModel(this.name))();
		console.log(this.facebook);
	}

	async getUserToken(){
		const response = await fetch(this.facebook.url + `oauth/access_token?grant_type=fb_exchange_token&client_id=${this.facebook.client_id}&client_secret=${this.facebook.client_secret}&fb_exchange_token=${this.facebook.user_short_token}`,{
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})

		return await response.json();
	}

	async getPageToken(){
		const token = await this.getUserToken();
		console.log("user token:", token);
		const response = await fetch(this.facebook.url + `oauth/access_token?grant_type=fb_exchange_token&client_id=${client_id}&client_secret=${client_secret}&fb_exchange_token=${token.access_token}`,{
			method: "GET",
			headers: {"Content-Type":"application/json"},
		})
		return response.json();
	}

	async getPageLongToken(){
		const token = await this.getPageToken();
		console.log("short page token", token);
		try{
			const response = await fetch(this.facebook.url + `${this.facebook.user_id}/accounts?access_token=${token.access_token}`,{
				method: "GET",
				headers: {"Content-Type":"application/json"}
			})
			const data = await this.model.findFirstOrThrow();
			await this.update(data.id, {long_token: token});
			return response.json();
		} catch(error) {
			console.log(error);
		}
	}

	async debugToken(){
		// const token = await getPageLongToken();
		// console.log("short page token", token);
		try{
			const response = await fetch(this.facebook.url + `debug_token?input_token=${this.facebook.long_token}&access_token=2211051359262344|dWht_aGdf2ddgYUmvWzyCHueSDw`,{
				method: "GET",
				headers: {"Content-Type":"application/json"}
			})
			const json = await response.json();
			const status = json.data.is_valid;
			return status
		} catch(error) {
			console.log(error);
		}
	}
}


module.exports = Facebook;