const AdressMatcher = require('./atividade1ClassConsumer')

describe('Class Consumer - findStreetName', () => {
    it('Should return street name', () => {
        const adressM = new AdressMatcher("Avenida Brasil, 123  Sao Paulo - SP, Brasil")
        const street = "Avenida Brasil"

        const result = adressM.findStreetName(street)
        expect(result).toBe(street)
    })

    it('should not return street name', () => {
        const adressM = new AdressMatcher("Avenida Brasil, 123  Sao Paulo - SP, Brasil")
        const street = "Rua 16"

        const result = adressM.findStreetName(street)
        expect(result).toBeNull()
    })
})

describe('Class Consumer - hideStreetName', () => {
    it('Should return hidden street name', () => {
        const adressM = new AdressMatcher("Avenida Brasil, 123  Sao Paulo - SP, Brasil")
        const street = "Avenida Brasil"
        const expected = "Avenid* Br*sil"

        const result = adressM.hideStreetName(street)
        expect(result).toBe(expected)
    })

    it('Should not return hidden street name', () => {
        const adressM = new AdressMatcher("Jose Matosinho, 123  Sao Paulo - SP, Brasil")
        const street = "Jose Matosinho"
        const expected = "Jose Matosinho"

        const result = adressM.hideStreetName(street)
        expect(result).toBe(expected)
    })

    it('2 - Should return hidden street name', () => {
        const adressM = new AdressMatcher("Ana Maria Braga, 123  Sao Paulo - SP, Brasil")
        const street = "Ana Maria Braga"
        const expected = "An* M*ri* Br*g*"

        const result = adressM.hideStreetName(street)
        expect(result).toBe(expected)
    })
})