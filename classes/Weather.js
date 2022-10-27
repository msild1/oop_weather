class Weather{
    constructor(city) {
        this.city = city
        this.key = "8e7fc1f98df00e5f10dc0e4579b07430"
    }

    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }
}