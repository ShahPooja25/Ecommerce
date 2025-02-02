import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-three-column">
          <div className="service-item">
            <TbTruckDelivery className="icon" />
            <h3>Super Fast and Free Delivery</h3>
          </div>

          <div className="service-item">
            <MdSecurity className="icon" />
            <h3>Non-contact Shipping</h3>
          </div>

          <div className="service-item">
            <GiReceiveMoney className="icon" />
            <h3>Money-back Guaranteed</h3>
          </div>

          <div className="service-item">
            <RiSecurePaymentLine className="icon" />
            <h3>Super Secure Payment System</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.background};

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4rem;
    align-items: center;
    justify-items: center;
  }

  .service-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 2rem;
    background-color: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px 0px;
    transition: all 0.3s ease-in-out;
    height: 25rem;
    width: 100%;

    &:hover {
      transform: translateY(-10px);
      box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 15px 0px;
    }

    .icon {
      font-size: 3.5rem;
      width: 6rem;
      height: 6rem;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 1.5rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }
    }

    h3 {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.colors.text};
      font-weight: 600;
      line-height: 1.4;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tablet}) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
