import axios from 'axios';
import { result } from 'lodash';
import { layDanhSachPhim } from './types/QuanLyPhimType';
export const layDanhSachPhimAction = () =>{
    return dispatch => {
        axios ({
            method:'get',
            url:'http://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP06'
        }).then(result=>{
            console.log(result.data);
            dispatch({
                type:layDanhSachPhim,
                danhSachPhim:result.data
            })
        }).catch(error => {
            console.log(error.response.data);
        })
    };
} 

