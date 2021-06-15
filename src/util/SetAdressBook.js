import { uri } from '../axios/index'
import axios from "axios"

export const setAdressBook = (adress) => {
    const {firstname , lastname , city , postcode , street ,telephone } = adress
    return {
        query: `     
        mutation ( $firstname: String! , $lastname: String! , $city: String! , $postcode: String! , $telephone: String! , $street: [String]!  ) {
                createCustomerAddress(input: {
                  region: {
                    region: ""
                    region_code: ""
                  }
                  country_code: TN
                  firstname: $firstname
                  lastname: $lastname
                  street: $street
                  city: $city
                  postcode: $postcode
                  telephone: $telephone
                  default_shipping: true
                  default_billing: false
                }) {
                  id
                  region {
                    region
                    region_code
                  }
                  country_code
                  street
                  telephone
                  postcode
                  city
                  default_shipping
                  default_billing
                }            
        }
      `,
      variables: {
        firstname: firstname,
        lastname: lastname,
        city: city,
        postcode: postcode,
        street: street,
        telephone: telephone,
        
      }
    }
}

export const saveAdress = async (token , adress) => {
    const data = await axios({
        url: uri,
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + token
        },
        data: setAdressBook(adress)
    }).catch((err) => {
        return ('Error message', err);
    })
    return data.data.data.createCustomerAddress
}