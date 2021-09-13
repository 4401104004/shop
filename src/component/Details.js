import React, { Component } from 'react';
import NewsItem from './NewsItem';

import dl from './data.json'
class Details extends Component {
    render() {

        var dem = 1;
        return (

            <div className="details">
                <div className="grid wide ">
                    <div className="row sm-gutter app__details">
                        <div className="row sm-gutter">
                            <div className="col l-12 m-12 c-0">
                                <div className="details__content-tittle">
                                    <span className="details__content-tittle-home">
                                        <a href="/">Trang chủ</a>
                                    </span>
                                    <i className="fas fa-chevron-right" />
                                    <span>Whoo Chống Nắng</span>
                                    <i className="fas fa-chevron-right" />
                                    <span>Kem chống nắng dạng sữa dưỡng da trắng mịn Whoo Vital Hydrating Sun Fluid SPF50+ PA+++ 60ml</span>
                                </div>
                            </div>
                            <div className="col l-0 m-0 c-12">
                                <span className="details__content-tittle-home">
                                    <a href="/">Trang chủ</a>
                                </span>
                                <i className="fas fa-chevron-right" />
                            </div>
                        </div>

                        {
                            dl.map((value, key) => {
                                if (value.id === parseInt(this.props.match.params.id, 20)) {
                                    return (
                                        <div className="details__content" key={key}>
                                            <nav className="details__content-list" >
                                                <img src={value.anh} alt="..." className="details-img" />
                                                <ul className="details__list-app">
                                                    <li className="details__list-app-item">
                                                        <a href className="details__list-app-link">
                                                            <img src={value.anh} alt="..." className="details__list-app-img" />
                                                        </a>
                                                    </li>
                                                    <li className="details__list-app-item"><a href className="details__list-app-link">
                                                        <img src={value.anh1} alt="..." className="details__list-app-img" />
                                                    </a></li>


                                                </ul>
                                                {/* <div className="details__text-price hide-pc">
                                                    <span className="details__text-price-old">{value.giaCu}</span>
                                                    <span className="details__text-price-current">{value.giaMoi}</span>
                                                    <span className="details__text-price-saleoff">{value.giamGia} GIẢM GIÁ</span>
                                                </div> */}
                                                <div className="details__text-btn hide-pc">
                                                    <a href className="details__text-btn-cart details__text-btn-add btn">
                                                        <i className="details__text-btn-icon fas fa-cart-plus" />
                                                        Thêm vào giỏ hàng
                                                    </a>
                                                    <a href className="details__text-btn-cart  btn btn-primary details__hover">
                                                        Mua ngay
                                                    </a>
                                                </div>
                                            </nav>
                                            <div className="details__content-text">
                                                <div className="details__text-name">
                                                    <div className="detail__like">
                                                        <i className="fas fa-check" />
                                                        <span className="detail__like-name">Yêu thích</span>
                                                    </div>
                                                    <h3 className="details__text-list">{value.tieuDe}</h3>
                                                </div>
                                                <ul className="details__text-star">
                                                    <li className="details__text-star-item">
                                                        <a href className="details__size details__text-star-link">4.0</a>
                                                        <i className="home-product-item__star--gold fas fa-star" />
                                                        <i className="home-product-item__star--gold fas fa-star" />
                                                        <i className="home-product-item__star--gold fas fa-star" />
                                                        <i className="home-product-item__star--gold fas fa-star" />
                                                        <i className="fas fa-star" />
                                                    </li>
                                                    <li className="details__text-star-item">
                                                        <a href className="details__size details__text-number">70</a>
                                                        <span className="details__text-text">Đánh giá</span>
                                                    </li>
                                                    <li className="details__text-star-item">
                                                        <span className="details__size details__text-number">{value.soLuong}</span>
                                                        <span className="details__text-text">Đã bán</span>
                                                    </li>
                                                </ul>
                                                <div className="details__text-price  ">
                                                    <span className="details__text-price-old">{value.giaCu}</span>
                                                    <span className="details__text-price-current">{value.giaMoi}</span>
                                                    <span className="details__text-price-saleoff">{value.giamGia} GIẢM GIÁ</span>
                                                </div>
                                                <table className="details__text-table">
                                                    <tbody><tr className="details__text-table-tr">
                                                        <td className="details__text-table-td1 details__text-table-name">Thông Tin</td>
                                                        <td>
                                                            <h4 className="details__text-table-inf">{value.tieuDe}</h4>
                                                            <span className="details__text-table-inf-inf">{value.thongTin}</span>
                                                        </td>
                                                    </tr>
                                                        <tr className="details__text-table-tr">
                                                            <td className="details__text-table-td1 details__text-table-name">Số lượng</td>
                                                            <td>
                                                                <a href className="details__text-table-btn">
                                                                    <i className="details__text-icon fas fa-minus" />
                                                                </a>
                                                                <input type="text" className="details__text-input" defaultValue={1} />
                                                                <a href className="details__text-table-btn">
                                                                    <i className="details__text-icon fas fa-plus" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                        <tr className="details__text-table-tr">
                                                            <td className="details__text-table-td1 details__text-table-name">Đơn Vị</td>
                                                            <td className="details__text-table-inf-inf">
                                                                kg
                                                            </td>
                                                        </tr>
                                                    </tbody></table>
                                                <div className="details__text-btn hide-on-mobile-tablet">
                                                    <a href className="details__text-btn-cart details__text-btn-add btn">
                                                        <i className="details__text-btn-icon fas fa-cart-plus" />
                                                        Thêm vào giỏ hàng
                                                    </a>
                                                    <a href className="details__text-btn-cart  btn btn-primary details__hover">
                                                        Mua ngay
                                                    </a>
                                                </div>
                                            </div>

                                        </div>
                                    )
                                }
                                else {
                                    return true;

                                }
                            })
                        }







                    </div>
                </div>

                {
                    dl.map((value, key) => {
                        if (value.id === parseInt(this.props.match.params.id, 20)) {
                            return (
                                <div className="inf" key={key}>
                                    <div className="grid wide ">
                                        <div className="row sm-gutter inf-app">
                                            <div className="inf-detail hide-on-mobile ">
                                                <span className="inf-detail-list">THÔNG TIN CHI TIẾT</span>
                                                <p className="inf-detail-item">
                                                    {value.chiTiet}
                                                </p>
                                                <img className="img-inf-detail" src={value.anh} alt="..." />



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return true;
                        }
                    })
                }



                <div className="grid wide ">
                    <div className="row sm-gutter ">
                        <div className="inf-detail hide-on-mobile ">

                            <span className="inf-detail-related">Sản phẩm liên quan</span>
                            <div className="row sm-gutter ">

                                {
                                    dl.map((value, key) => {
                                        if (value.id !== parseInt(this.props.match.params.id, 20)) {

                                            if (key <= 5) {
                                                dem++;
                                                return (
                                                    <NewsItem
                                                        key={key}
                                                        spId={value.id}
                                                        anh={value.anh}
                                                        tieuDe={value.tieuDe}
                                                        giaCu={value.giaCu}
                                                        giaMoi={value.giaMoi}
                                                        soLuong={value.soLuong}
                                                        giamGia={value.giamGia}

                                                    ></NewsItem>
                                                )

                                            }
                                            else {
                                                return true;
                                            }
                                        }
                                        else {
                                            return true;
                                        }
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>






                <br />
            </div>


        );
    }
}

export default Details;