import React, { Component } from 'react';

class NewsItem extends Component {
    
    chuyenDoiURL =(str) => {
        // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');

    // return
    return str;
    }
    
    render() {
        return (
            
                <div className="col l-2-4 m-4 c-6">
                    <div className="home-product-item">
                    <a href={"/chi-tiet/"+ this.chuyenDoiURL(this.props.tieuDe) + "." + this.props.spId + ".html"} className="home-product-item--link">
                            <div className="home-product-item__img" style={{ "background-image": `url(${this.props.anh})` }} />
                            <h4 className="home-product-item__name"> {this.props.tieuDe} </h4>
                            <div className="home-product-item__price">
                                <span className="home-product-item__price-old">{this.props.giaCu}</span>
                                <span className="home-product-item__price-current">{this.props.giaMoi}</span>
                            </div>
                            <div className="home-product-item__action">
                                <span className="home-product-item__like home-product-item__like--liked">
                                    <i className="home-product-item__like-icon-none far fa-heart" />
                                    <i className="home-product-item__like-icon-fill fas fa-heart" />
                                </span>
                                <span className="home-product-item__rating">
                                    <i className="home-product-item__star--gold fas fa-star" />
                                    <i className="home-product-item__star--gold fas fa-star" />
                                    <i className="home-product-item__star--gold fas fa-star" />
                                    <i className="home-product-item__star--gold fas fa-star" />
                                    <i className="fas fa-star" />
                                </span>
                                <span className="home-product-item__sold">
                                    {this.props.soLuong}
                                </span>
                            </div>
                            <div className="home-product-item__origin">
                                <span className="home-product-item__brand">Whoo</span>
                                <span className="home-product-item__origin-name">Hàn Quốc</span>
                            </div>
                            <div className="home-product-item__faourite">
                                <i className="fas fa-check" />
                                <span>Yêu thích</span>
                            </div>
                            <div className="home-product-item__sale-off">
                            <span className="home-product-item__sale-off-percent">{this.props.giamGia}</span>
                                
                                <span className="home-product-item__sale-off-lable">GIẢM</span>
                            </div>
                        </a>
                    </div>
                </div>

            
        );
    }
}

export default NewsItem;