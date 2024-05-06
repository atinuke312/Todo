const person = {
    name:'Atinuke',
    address: {
        line1: 'Golden Street',
        city: 'Mansion City',
        country: 'Kingdom of Heaven'
    },
    profiles: ['twitter','linkedin','instagram'],
    printProfile: () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )

        console.log(person.profiles[0])
    }
}

export default function LearningJavascript(){
    return(
        <>
        <div>{person.name}</div>
        <div>{person.address.line1}</div>
        <div>{person.profiles[0]}</div>
        <div>{person.printProfile()}</div>
        </>
    )
}