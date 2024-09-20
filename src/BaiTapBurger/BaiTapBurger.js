import React, { Component } from 'react';
import {connect} from 'react-redux'
import './BaiTapBurger.css'

class BaiTapBurger extends Component {

    renderBreadMid = () => {
        // console.log(this.props.burger);
        let {burger} = this.props
        // let content = []
        // for(let propBuger in burger){
        //     // console.log(propBuger, burger[propBuger]);
        //     let breadMid = []
        //     for(let i = 0; i < burger[propBuger]; i++){
        //         breadMid.push(<div key={i} className={propBuger}></div>)
        //     }
        //     content.push(breadMid)
        // }
        //return content

        return Object.entries(burger).map(([propsBurger, value], index) => {

            let breadMid = []
            for(let i = 0; i < value; i++){
                breadMid.push(<div key={index} className={propsBurger}></div>)
            }

            return breadMid
        })
    }

    renderMenu = () => {
        let {menu, burger} = this.props
        // console.log(menu);
        return Object.entries(menu).map(([propsMenu, price], index) => {
            return (
                <tr key={index}>
                    <td>{propsMenu}</td>
                    <td>
                        <button onClick={() => {this.props.addBreadMid(propsMenu, 1)}} className='btn btn-success'>+</button> 

                            {burger[propsMenu]}
                            
                        <button onClick={() => {this.props.addBreadMid(propsMenu, -1)}} className='btn btn-danger'>-</button>
                    </td>
                    <td>{price}</td>
                    <td>{burger[propsMenu] * price}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <h3 className='display-4 text-center'>Bài tập burger</h3>
                <div className="row">
                    <div className="col-7">
                        <h3 className='text-center text-danger'>Bánh burger của bạn</h3>
                        <div className='breadTop'></div>
                            {this.renderBreadMid()}
                        <div className='breadBottom'></div>
                    </div>
                    <div className="col-5">
                        <h3 className='text-center text'>Chọn thức ăn</h3>
                        <table className="table">
                            <thead>

                                <tr>
                                    <th>Topping</th>
                                    <th>Thêm</th>
                                    <th>Giá</th>
                                    <th>Thành tiền</th>
                                </tr>
                                {this.renderMenu()}
                                <tfoot>
                                    <tr>
                                        <td colSpan="2"></td>
                                        <td>Tổng cộng</td>
                                        <td>{this.props.total}</td>
                                    </tr>
                                </tfoot>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    //lấy state của redux về làm props của cmponent này
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBreadMid: (propsBurger, amount) => {
            const action = {
                type: 'ADD_BREADMID',
                propsBurger,
                amount,
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaiTapBurger);