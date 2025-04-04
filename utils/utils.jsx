export default function convertISO8601ToStandardDateTime(ISO8601DateTime) {
    if (ISO8601DateTime) {
        const formattedTime = ISO8601DateTime.substring(ISO8601DateTime.indexOf("T") + 1, ISO8601DateTime.length - 5)
        const formattedDate = ISO8601DateTime.substring(0, ISO8601DateTime.indexOf("T"))
        return formattedDate + "-" + formattedTime
    }
    else {
        return null
    }

}