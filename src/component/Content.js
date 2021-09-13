import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './data.json';
class content extends Component {
    
    
    
    
    render() {
        return (
            <div className="app__container">
                <div className="grid wide">
                    <div className="row sm-gutter app__content">
                        <div className="col l-2 m-0 c-0">
                            <nav className="category">
                                <h3 className="category__heading">
                                    <i className="category__heading-icon fas fa-list" />
                                    Danh mục
                                </h3>
                                <ul className="category-list">
                                    <li className="category-item category-item--active">
                                        <a href="!#" className="category-item__link">Sản phẩm</a>
                                    </li>
                                    <li className="category-item">
                                        <a href="!#" className="category-item__link">Kem chống nắng</a>
                                    </li>
                                    <li className="category-item">
                                        <a href="!#" className="category-item__link">Kem dưỡng mắt</a>
                                    </li>
                                    <li className="category-item">
                                        <a href="!#" className="category-item__link">Kem dưỡng</a>
                                    </li>
                                    <li className="category-item">
                                        <a href="!#" className="category-item__link">Kem lót</a>
                                    </li>
                                    <li className="category-item">
                                        <a href="!#" className="category-item__link">Nước hoa hồng</a>
                                    </li>
                                    <li className="category-item">
                                        <a href="!#" className="category-item__link">Mặt nạ</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col l-10 m-12 c-12">
                            <div className="home-filter hide-on-mobile-tablet">
                                <span className="home-filter__lable">Sắp xếp theo :</span>
                                <button className="home-filter__btn btn">Phổ biến</button>
                                <button className="home-filter__btn btn btn-primary">Mới nhất</button>
                                <button className="home-filter__btn btn">Bán chạy</button>
                                <div className="select-input">
                                    <span className="select-input__lable">Giá</span>
                                    <i className="select-input__icon fas fa-angle-down" />
                                    <ul className="select-input__list">
                                        <li className="select-input__item">
                                            <a href className="select-input__link">Giá : Thấp đến cao</a>
                                        </li>
                                        <li className="select-input__item">
                                            <a href className="select-input__link">Giá : Cao đến thấp</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="home-filter__page">
                                    <span className="home-filter__page-num">
                                        <span className="home-filter__page-current">1</span>/14
                                    </span>
                                    <div className="home-filter__page-control">
                                        <a href className="home-filter__page-btn">
                                            <i className="home-filter__page-icon fas fa-angle-left" />
                                        </a>
                                        <a href className="home-filter__page-btn">
                                            <i className="home-filter__page-icon fas fa-angle-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <nav className="mobile-category">
                                <ul className="mobile-category__list">
                                    <li className="mobile-category__item">
                                        <a href="..." className="mobile-category__link">
                                            Kem lót &amp; Kem chống nắng
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="..." className="mobile-category__link">
                                            Kem dưỡng &amp; Kem làm trắng
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="..." className="mobile-category__link">
                                            Mặt nạ &amp; Nước hoa hồng
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="..." className="mobile-category__link">
                                            Kem dưỡng mắt &amp; Kem dưỡng mặt
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="..." className="mobile-category__link">
                                            Mascara &amp; Vẽ mắt
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="..." className="mobile-category__link">
                                            Phấn nước &amp; Phấn nền
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="..." className="mobile-category__link">
                                            Kem chống lão hóa &amp; Kem câp nước
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="..." className="mobile-category__link">
                                            Dưỡng chất &amp; Serum
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="..." className="mobile-category__link">
                                            Dụng cụ &amp; Thiết bị tẩy trang
                                        </a>
                                    </li>
                                    <li className="mobile-category__item">
                                        <a href="..." className="mobile-category__link">
                                            Nước hoa hồng &amp; kem làm trắng
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="home-product">
                                <div className="row sm-gutter">

                                    {/* product item */}

                                    {
                                        dl.map((value, key) => {
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

                                        })
                                    }
                                    

                                </div>
                            </div>
                            <ul className="pagination home-product__pagination">
                                <li className="pagination-item">
                                    <a href className="pagination-item__link">
                                        <i className="pagination-item__icon fas fa-angle-left">
                                        </i>
                                    </a>
                                </li>
                                <li className="pagination-item pagination-item--active">
                                    <a href className="pagination-item__link">1</a>
                                </li>
                                <li className="pagination-item">
                                    <a href className="pagination-item__link">2</a>
                                </li>
                                <li className="pagination-item">
                                    <a href className="pagination-item__link">3</a>
                                </li>
                                <li className="pagination-item">
                                    <a href className="pagination-item__link">4</a>
                                </li>
                                <li className="pagination-item">
                                    <a href className="pagination-item__link">5</a>
                                </li>
                                <li className="pagination-item">
                                    <a href className="pagination-item__link">...</a>
                                </li>
                                <li className="pagination-item">
                                    <a href className="pagination-item__link">14</a>
                                </li>
                                <li className="pagination-item">
                                    <a href className="pagination-item__link">
                                        <i className="pagination-item__icon fas fa-angle-right">
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default content;