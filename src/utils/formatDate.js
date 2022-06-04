export const formatDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString("pl-PL", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    })
}