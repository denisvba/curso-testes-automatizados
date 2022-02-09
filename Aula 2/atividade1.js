class StringManipulations {

    /**
     * Class for string manipulations
     * @param  {String} string  
     */
    constructor(string) {
        this.string = string;
    }

    /**
     * Returns the first substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findFirstMatch(subStr) {
        const pattern = new RegExp(subStr, 'g')
        const result = this.string.match(pattern)
        return result ? result[0] : null
    }


    /**
     * Returns the last substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findLastMatch(subStr) {
        const pattern = new RegExp(subStr, 'g')
        const result = this.string.match(pattern)
        return result ? result[result.length - 1] : null
    }

    /**
     * Returns the fsubstring between two given other strings
     * @param  {String} subStr1  begining of the match
     * @param  {String} subStr2  ending of the match
     * @return {String}
     */
    substringBetweenMatches(subStr1, subStr2) {
        const result = this.string.substring(
            this.string.indexOf(subStr1) + subStr1.length,
            this.string.lastIndexOf(subStr2)
        )

        return result
    }

    /**
    Given the string attribute of the class, 
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2, 
    return instead the empty string.
    * @return {String}
    */
    both_ends() {
        if (this.string.length < 2) return ''

        const start = this.string.substring(0, 2)
        const end = this.string.substring(this.string.length - 2, this.string.length)
        const result = `${start}${end}`
        return result
    }

    /**
     Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
    fix_start(str1) {
        const prefix = str1[0]
        const regex = new RegExp(prefix, 'gi')

        const subString = str1.substring(1, str1.length)
        const result = subString.replace(regex, '*')

        return `${prefix}${result}`
    }

}

module.exports = StringManipulations