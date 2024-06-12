import { api } from "../../config/apiConfig";
import {
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    GET_ORDER_BY_ID_FAILURE,
    GET_ORDER_BY_ID_REQUEST,
    GET_ORDER_BY_ID_SUCCESS,
} from "./ActionType";

// Create Order Action Creator
export const createOrder = (reqData) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const { data } = await api.post(
            `/api/orders/`,
            { address: reqData.address } // Ensure this is the correct structure
        );

        if (data.id) {
            reqData.navigate({ search: `step=3&order_id=${data.id}` });
        }
    } catch (error) {
        console.log("catch:", error)// Log the error
        dispatch({
            type: CREATE_ORDER_FAILURE,
            payload: error.message
        });
    }
};

// Get Order by ID Action Creator
export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({ type: GET_ORDER_BY_ID_REQUEST });
    try {
        const { data } = await api.get(
            `/api/orders/${orderId}`,

        );

        console.log("order by id:", data);
        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data,
        });

    } catch (error) {
        console.log("catch", error)
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.message
        });

    }
};
