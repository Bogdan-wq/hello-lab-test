export default class Validator {
    constructor(value) {
        this.value = value;
        this.cyrillic = 'йцукенгшщзхъфывапролджэёячсмитьбю'
    }

    noLength() {
        if(this.value.error) {
            return this;
        }

        return this.value.length === 0
            ? new Validator({
                error:true,
                message:'This field is required',
            })
            : new Validator(this.value)
    }


    onlyLetters() {
        if(this.value.error) {
            return this;
        }
        return !this.value
            .split('')
            .every(char => {
                const charToASCII = char.charCodeAt(0);
                return (charToASCII >= 65 && charToASCII <= 90
                    || charToASCII >= 97 && charToASCII <= 122)
                    || this.cyrillic.split('').includes(char.toLowerCase())
            })
            ? new Validator({
                error:true,
                message:'Only letters allowed',
            })
            : new Validator(this.value)
    }


    strongSymbols(symbolsLength) {
        if(this.value.error) {
            return this;
        }
        return this.value.length === symbolsLength
            ? new Validator(this.value)
            : new Validator({
                error:true,
                message:`Should contain ${symbolsLength} characters`,
            })
    }


    onlyNumbers() {
        if(this.value.error) {
            return this;
        }

        return this.value
            .split('')
            .every(char => {
                const charToASCII = char.charCodeAt(0);
                return (charToASCII >= 48 && charToASCII <= 57)
            })
        ? new Validator(this.value)
        : new Validator({
                error:true,
                message:`Only numbers allowed`,
            })
    }

    getValue() {
        return this.value
    }
}