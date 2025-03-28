export const  initialState = [];

export const cartReducer = (state, action) => {
    let existingProduct = null;
    switch (action.type) {
        case 'ADD':
            existingProduct = state.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        case 'INCREMENT_QUANTITY':
            existingProduct = state.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }
        case 'DECREMENT_QUANTITY':
             existingProduct = state.find((item) => item.id === action.payload.id);
            if (existingProduct) {
                // If the quantity is 1, remove the item from the cart
                // Otherwise, decrement the quantity by 1
                if (existingProduct.quantity === 1) {
                    return state.filter((item) => item.id !== action.payload.id);
                }
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            } else {
                return [...state, { ...action.payload, quantity: 1 }];
            }    
        case 'REMOVE':
            return state.filter((item) => item.id !== action.payload.id);
            
        default:
            return state;
    }
}