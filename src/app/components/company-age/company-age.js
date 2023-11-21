// 'use client'

export default function CompanyAge(){

    const foundingDate = new Date(2005, 4, 2);

    function age() {
        const today = new Date();
        const age = today.getFullYear() - foundingDate.getFullYear() - 
                (today.getMonth() < foundingDate.getMonth() || 
                (today.getMonth() === foundingDate.getMonth() && today.getDate() < foundingDate.getDate()));
        return age;
    }

    return(
        <>
            {age()}
        </>
    )
}