import './App.css';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
   console.log(props);
   //    const { name, job, phoneNumber, children } = props;
   return (
      <div>
         <div>
            안녕하세요. 제 이름은 {props.name}입니다. 직업은 {props.job} 입니다. 제 전화번호는 {props.phone} 입니다.
         </div>
         <div>children 값은 {props.child} 입니다.</div>
      </div>
   );
};

// 디폴트 props값 지정
MyComponent.defaultProps = {
   name: 'default name',
   job: 'front-end developer',
   phone: 123456,
   childern: 'child',
};

MyComponent.propTypes = {
   name: PropTypes.string,
   phoneNumber: PropTypes.number.isRequired,
};

export default MyComponent;
