let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st street',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personDetailAddress = {}
let allPersonDetail = {}

for(personDetail in person){
  if(typeof person[personDetail] === 'object'){
    personDetailAddress = person[personDetail]
    personDetailAddress.street = "Baner"
  }else{
    allPersonDetail[personDetail] = person[personDetail]
    allPersonDetail[personDetail] = "Nilesh"
  }
  
}
allPersonDetail = {...allPersonDetail ,...personDetailAddress}
console.log(allPersonDetail)
console.log(person)

