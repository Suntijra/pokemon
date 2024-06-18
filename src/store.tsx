import React, { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';

// 1. กำหนดประเภทของ State
interface State {
    count: number,
    isLogin: boolean
}

// 2. กำหนด Action Types
type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' };

// 3. สร้าง Initial State
const initialState: State = {
    count: 0,
    isLogin: false
};

// 4. สร้าง Reducer
const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 };
        case 'decrement':
            return { ...state, count: state.count - 1 };
        case 'reset':
            return { ...state, count: 0 };
        default:
            throw new Error('Unhandled action type');
    }
};

// 5. สร้าง Context
interface StoreContextProps {
    state: State;
    dispatch: Dispatch<Action>;
}

const StoreContext = createContext<StoreContextProps | undefined>(undefined);

// 6. สร้าง Provider Component
interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};

// 7. สร้าง custom hook สำหรับใช้งาน Context
export const useStore = () => {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};
