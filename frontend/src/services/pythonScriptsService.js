import Api from '@/services/Api'

//An object that allows us to call a register method
export default {
    bigFiveP(credentials){
        //We're doing a post request to the register page aka endpoint ans sending some credentials
		console.log('We are in services')
        return Api().post('bigFiveP', credentials)
    },
	matchesForLove(credentials){
		console.log('using matches for love')
        return Api().post('matchesForLove', credentials)
	}
}