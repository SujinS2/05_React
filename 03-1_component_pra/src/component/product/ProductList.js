import "./productList.css";
import { useState } from "react";

const ProductList = () => {
  const [productList, setProductList] = useState([
    {
      productNo: 1,
      productName: "노란색 상의",
      productPrice: "9,900",
      productImg: "/img/product (1).jpg",
      isLike: true,
      star: 4,
    },
    {
      productNo: 2,
      productName: "검은색 자켓",
      productPrice: "29,000",
      productImg: "/img/product (2).jpg",
      isLike: true,
      star: 3,
    },
    {
      productNo: 3,
      productName: "죠스바 세트",
      productPrice: "9,750",
      productImg: "/img/product (3).jpg",
      isLike: false,
      star: 4,
    },
    {
      productNo: 4,
      productName: "하트 티셔츠",
      productPrice: "19,990",
      productImg: "/img/product (4).jpg",
      isLike: true,
      star: 3,
    },
    {
      productNo: 5,
      productName: "카메라 포켓",
      productPrice: "843,000",
      productImg: "/img/product (5).jpg",
      isLike: false,
      star: 3,
    },
    {
      productNo: 6,
      productName: "에그햄 치즈 샌드위치",
      productPrice: "4,800",
      productImg: "/img/product (6).jpg",
      isLike: true,
      star: 3,
    },
  ]);

  const like3 = (index) => {
    productList[index].isLike = !productList[index].isLike;
    setProductList([...productList]);
  };

  const register = (product) => {
    setProductList([...productList, product]);
  };
  return (
    <div className="product-content">
      <div className="title">
        <span>상품목록</span>
      </div>
      <div className="product-list">
        {productList.map((product, index) => {
          function like2() {
            productList[index].isLike = !productList[index].isLike;
            setProductList([...productList]);
          }
          return (
            <Product
              product={product}
              index={index}
              //   setProductList={setProductList}
              //   productList={productList}
              like2={like2}
              like3={like3}
              key={"product" + index}
            ></Product>
          );
        })}
      </div>
      <RegistProduct register={register}></RegistProduct>
    </div>
  );
};

const Product = (props) => {
  const product = props.product;
  const index = props.index;
  //   const setProductList = props.setProductList;
  //   const productList = props.productList;
  //   const like = () => { //=>여기서 함수 정의
  //     product.isLike = !product.isLike;
  //     productList[index].isLike = product.isLike;
  //     setProductList([...productList]);
  //   };
  const like2 = props.like2; //maps 안에 함수 정의해서 보내는 거
  const like3 = props.like3; //맨 상위에서 함수 정의한것
  const like4 = () => {
    like3(index);
  };
  return (
    <div className="product">
      <div className="product-img">
        <img src={product.productImg} alt="" />
      </div>
      <div className="product-info">
        <div className="product-title">{product.productName}</div>
        <div className="product-price">
          <span className="price">{product.productPrice}</span>
          <span>원</span>
        </div>
        <div className="star-rate">
          <StarRate star={product.star}></StarRate>
        </div>
        <div className="like">
          {product.isLike ? (
            <span className="material-icons" onClick={like4}>
              favorite
            </span>
          ) : (
            <span className="material-icons" onClick={like4}>
              favorite_border
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const StarRate = (props) => {
  const star = props.star;
  const arr = new Array();
  for (let i = 0; i < star; i++) {
    arr.push(
      <span key={"star" + i} className="material-icons star-on">
        grade
      </span>
    );
  }
  return <>{arr}</>;
};

const RegistProduct = (props) => {
  const register = props.register;
  //상품번호, 이름, 가격, 별점, 이미지 경로 입력받아서 추가하는 작업(좋아요는 기본적으로 false)
  const [product, setProduct] = useState({
    productNo: "",
    productName: "",
    productPrice: "",
    productImg: "",
    isLike: false,
    star: "",
  });
  const changeInputValue = (e) => {
    //console.log(e);
    setProduct({ ...product, [e.target.id]: e.target.value }); //@id, name은 속성값이므로 해당 태그 안에 준 속성이 뭔지 기억하자
  };

  const regist = () => {
    register(product);
    setProduct({
      productNo: "",
      productName: "",
      productPrice: "",
      productImg: "",
      isLike: false,
      star: "",
    });
  };

  return (
    <div className="regist-wrap">
      <InputDiv
        name="상품번호"
        id="productNo"
        value={product.productNo}
        changeInputValue={changeInputValue}
      ></InputDiv>
      {/* <label htmlFor="productNo">상품번호</label>
        <input
          type="text"
          id="productNo"
          value={product.productNo}
          onChange={changeInputValue}
        /> */}
      <InputDiv
        name="상품이름"
        id="productName"
        value={product.productName}
        changeInputValue={changeInputValue}
      ></InputDiv>
      <InputDiv
        name="상품가격"
        id="productPrice"
        value={product.productPrice}
        changeInputValue={changeInputValue}
      ></InputDiv>
      <InputDiv
        name="별점"
        id="star"
        value={product.star}
        changeInputValue={changeInputValue}
      ></InputDiv>
      <InputDiv
        name="이미지 경로"
        id="productImg"
        value={product.productImg}
        changeInputValue={changeInputValue}
      ></InputDiv>
      <button onClick={regist}>상품등록</button>
    </div>
  );
};

const InputDiv = (props) => {
  const name = props.name;
  const id = props.id;
  const changeInputvalue = props.changeInputValue;
  const value = props.value;
  return (
    <div>
      <label htmlFor={id}>{name}</label>
      <input type="text" id={id} onChange={changeInputvalue} value={value} />
    </div>
  );
};

export default ProductList;
