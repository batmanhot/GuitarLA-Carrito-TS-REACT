export type Guitar = {
      id: number,
      name: string
      image: string
      description: string
      price: number
}


// Aqui se crea un objeto heredado de Guitar, utilizando el type Pick 
// y colocando los campos necesarios para heredar.

// export type cartItem = Pick<Guitar, 'id' | 'name' | 'price' >  & {      
//       quantity: number
// }

export type cartItem = Guitar & {      
      quantity: number
}

//export type GuitarID = Pick<Guitar,'id'> ;
// export type GuitarID = Guitar['id']