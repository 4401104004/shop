import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (

            <footer className="footer">
                <div className="grid wide ">
                    <div className="row">
                        <div className="col l-2-4 m-4 c-12">
                            <div className="footer-mobile">
                                <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                                <ul className="footer-list">
                                    <li className="footer-item">
                                        <a href className="footer-item__link">Trung tâm trợ giúp</a>
                                    </li>
                                    <li className="footer-item">
                                        <a href className="footer-item__link">F8-Shop Mall</a>
                                    </li>
                                    <li className="footer-item">
                                        <a href className="footer-item__link">Hướng dẫn mua hàng</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col l-2-4 m-4 c-12">
                            <h3 className="footer__heading">Giới thiệu</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href className="footer-item__link">Giới thiệu</a>
                                </li>
                                <li className="footer-item">
                                    <a href className="footer-item__link">Tuyển dụng</a>
                                </li>
                                <li className="footer-item">
                                    <a href className="footer-item__link">Điều khoản</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-2-4 m-4 c-12">
                            <h3 className="footer__heading">Danh mục</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href className="footer-item__link">Kem chống năng</a>
                                </li>
                                <li className="footer-list">
                                    <a href className="footer-item__link">Kem dưỡng</a>
                                </li>
                                <li className="footer-list">
                                    <a href className="footer-item__link">Kem mắt</a>
                                </li>
                                <li className="footer-list">
                                    <a href className="footer-item__link">Kem lót</a>
                                </li>
                                <li className="footer-list">
                                    <a href className="footer-item__link">Nước hoa hồng</a>
                                </li>
                                <li className="footer-list">
                                    <a href className="footer-item__link">Mặt nạ</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-2-4 m-4 c-12">
                            <h3 className="footer__heading">Theo dõi</h3>
                            <ul className="footer-list">
                                <li className="footer-item">
                                    <a href className="footer-item__link">
                                        <i className="footer-item__icon fab fa-facebook" />
                                        Facebook
                                    </a>
                                </li>
                                <li className="footer-list">
                                    <a href className="footer-item__link">
                                        <i className="footer-item__icon fab fa-instagram" />
                                        Instagram
                                    </a>
                                </li>
                                <li className="footer-list">
                                    <a href className="footer-item__link">
                                        <i className="footer-item__icon fab fa-linkedin" />
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col l-2-4 m-8 c-12">
                            <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
                            <div className="footer__download">
                                <img src="../img/qrShop.png" alt="Down load QR" className="footer__download-img" />
                                <div className="footer__download-apps">
                                    <a href className="footer__download-apps__link">
                                        <img src="../img/app-store.png" alt="Store play" className="footer__download-apps-img" />
                                    </a>
                                    <a href className="footer__download-apps__link">
                                        <img src="../img/app-gg-play.png" alt="Google play" className="footer__download-apps-img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="grid wide">
                        <p className="footer__text">© 2021 - Bản quyền thuộc về công ty TNHH TickID</p>
                    </div>
                </div>
            </footer>

        );
    }
}

export default Footer;