import React, { useState } from 'react';
import { Button, Drawer, Checkbox } from 'antd';
import { IoIosMenu } from "react-icons/io";
import group4 from '../../assets/images/Group 4.png'
import "../../assets/css/style/drawer.scss"
import img from "../../assets/images/drawer_img/cart_cup.png"
import img1 from "../../assets/images/drawer_img/cart_plate.png"
import coupanimf from "../../assets/images/drawer_img/layer_one.png"


const Drawericon = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <img src={group4} alt='storepedia' className='icons' onClick={showDrawer} />
            <Drawer title="Your Cart (0)" placement="right" onClose={onClose} open={open} width={550}>
                <div className='coupan_area'>

                    <div className='copan_left'>
                        <i><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <circle cx="7.00049" cy="7" r="6.5" stroke="#CFCFCF"/>
</svg></i>
                        <p>2000 Reward Points (₹20)</p>
                    </div>
                    <div className='copan_right'>
                        <button>Apply</button>
                    </div>



                </div>
                <div className='cart-products'>
                    <div className='left_cart'>
                        <img src={img1} alt="imge" />
                    </div>
                    <div className='right_cart'>
                        <h2>White Ceramic Dinner Plates</h2>
                        <span>Set of 2</span>
                    </div>

                </div>
                <div className='cart-products'>
                    <div className='left_cart'>
                        <img src={img} alt="imge" />
                    </div>
                    <div className='right_cart'>
                        <h2>Hand Painted Mugs Ceramic</h2>
                        <span>Set of 1</span>
                    </div>

                </div>
                <div className='coupan'>
                    <div className='left_Coupon'>
                        <img src={coupanimf} alt="img" />
              
                      
                    </div>
                    <div className='right_Coupon'>
                        <span className='ri_cou_span'>EXTRA10 Applied!</span>
                        <p>View More Coupons</p>
                    </div>
                </div>
                <div className='prize_detail'>
                    <h4>Price Details</h4>
                    <div className='prize_dra'>
                        <p>Bag MRP (2items)</p>
                        <p>₹1277</p>

                    </div>
                    <div className='prize_dra'>
                        <p>Bag Discount</p>
                        <p>₹177</p>

                    </div>
                    <div className='prize_dra'>
                        <p>Coupon Discount</p>
                        <p>₹100</p>

                    </div>
                    <div className='prize_dra'>
                        <p>Shipping</p>
                        <p>Free</p>

                    </div>
                    <div className='prize_dra'>
                        <p className='p_bold'>Total</p>
                        <p className='p_bold'>₹1000</p>

                    </div>



                </div>
                <div className='reward_point_drawer'>
                    <div className='reward_text_p'>
                    <p>Redeem points on your next order!</p>
                    <p className='bold_p_reward'>Earn 1000 Reward Points</p>
                    </div>




                </div>
                <div className='proceed_drawer'>
                    <div className='proceed_money'>
                        <p className='bold_thousand'>₹1000</p>
                        <p>Grand Total</p>
                    </div>
                    <div className='proceed_btn'>
                        <p>Proceed</p>
                        <i><svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none">
  <path d="M1.00001 14.6003L9.01272 7.81525L1.02545 1.0003" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg></i>



                    </div>




                </div>

            </Drawer>
        </>
    );
};
export default Drawericon;