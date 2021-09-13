import React, { Component } from 'react';

class DangNhap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangThai : 0
        }
    }
    
    render() {
        return (
            <div className="authen-form">
                <div className="authen-form__container">
                    <div className="authen-form__header">
                        <h3 className="authen-form__heading">Đăng nhập</h3>
                        <span className="authen-form__swictch-btn">Đăng ký</span>
                    </div>
                    <div className="authen-form__form">
                        <div className="authen-form__group">
                            <input type="text" placeholder="Email của bạn" required className="authen-form__input" />
                        </div>
                        <div className="authen-form__group">
                            <input type="password" placeholder="Mật khẩu" required className="authen-form__input" />
                        </div>
                    </div>
                    <div className="authen-form__aside">
                        <div className="authen-form__help">
                            <a href className="authen-form__help-link authen-form__help-forgot">Quên mật khẩu</a>
                            <span className="authen-form__help-separate" />
                            <a href className="authen-form__help-link">Trợ giúp ?</a>
                        </div>
                    </div>
                    <div className="authen-form__controls">
                        <button className="btn authen-form__controls-back btn--normal">TRỞ LẠI</button>
                        <button className="btn btn-primary">ĐĂNG NHẬP</button>
                    </div>
                </div>
                <div className="authen-form__social">
                    <a href className="authen-form__social--facebook btn btn--size-s btn--with-icon">
                        <i className="authen-form__social-icon fab fa-facebook-square" />
                        <span className="authen-form__social-lable">
                            Facebook
                        </span>
                    </a>
                    <a href className="authen-form__social--google btn btn--size-s btn--with-icon">
                        <i className="authen-form__social-icon fab fa-google" />
                        <span className="authen-form__social-lable">
                            Google
                        </span>
                    </a>
                </div>
            </div>
        );
    }
}

export default DangNhap;