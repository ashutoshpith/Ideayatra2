import React from "react";

const CardSix = ({ className = "", fill = "", id = 6, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M98.8032 48.759H1.19667C1.03957 48.7589 0.883989 48.7897 0.73881 48.8498C0.59363 48.9099 0.461702 48.998 0.350567 49.1091C0.239432 49.2203 0.151269 49.3522 0.0911169 49.4975C0.0309653 49.6428 4.58085e-06 49.7985 4.6487e-06 49.9557C0.000358504 59.8536 2.93299 69.5292 8.42708 77.7589C13.9212 85.9886 21.73 92.4028 30.866 96.1905C40.0021 99.9783 50.0551 100.969 59.7539 99.0385C69.4527 97.1076 78.3617 92.3414 85.3543 85.3427C90.0117 80.7064 93.7042 75.1916 96.2181 69.1174C98.732 63.0433 100.017 56.5304 99.9998 49.9557C99.9998 49.7985 99.9689 49.6428 99.9087 49.4975C99.8486 49.3522 99.7604 49.2203 99.6493 49.1091C99.5381 48.998 99.4062 48.9099 99.261 48.8498C99.1158 48.7897 98.9603 48.7589 98.8032 48.759ZM67.5232 51.1513C67.4768 56.9161 67.0048 62.6697 66.111 68.3649C55.6598 64.821 44.3334 64.821 33.8822 68.3649C32.9896 62.6695 32.5184 56.916 32.4722 51.1513H67.5232ZM49.9999 97.6073C43.2221 97.6073 37.1999 86.5105 34.2988 70.7771C44.4619 67.2064 55.5368 67.2064 65.6999 70.7771C62.7999 86.5093 56.7777 97.6073 49.9999 97.6073ZM30.0855 51.1513C30.1253 57.2027 30.6222 63.2425 31.5722 69.219C30.8944 69.4881 30.22 69.7751 29.5522 70.0698C23.697 72.6936 18.404 76.4259 13.9644 81.061C6.76048 72.7361 2.67505 62.1615 2.40889 51.1513H30.0855ZM15.5766 82.8382C20.2057 77.9962 25.8015 74.1841 31.9999 71.6501C32.8164 76.1741 34.0357 80.6159 35.6433 84.9223C37.771 90.4741 40.3466 94.5979 43.1988 97.1169C32.6529 95.5904 22.925 90.5618 15.5766 82.8382ZM56.8055 97.1191C59.6521 94.6001 62.2277 90.4763 64.361 84.9246C65.9671 80.6172 67.1849 76.1747 67.9999 71.6501C74.1979 74.1838 79.7933 77.9955 84.4221 82.8371C77.0758 90.5611 67.35 95.5909 56.8055 97.1191ZM86.0354 81.0599C81.6035 76.4349 76.3218 72.709 70.4799 70.0865C69.7988 69.7795 69.1121 69.4937 68.4221 69.219C69.3715 63.2425 69.8685 57.2027 69.9088 51.1513H97.5932C97.3264 62.1615 93.2402 72.7357 86.0354 81.0599ZM1.19667 39.1024H27.0722C26.6105 40.9659 26.3773 42.8788 26.3777 44.7987C26.3774 44.9561 26.4082 45.1119 26.4681 45.2574C26.5281 45.4028 26.6161 45.535 26.7271 45.6463C26.8382 45.7577 26.9701 45.846 27.1153 45.9063C27.2605 45.9666 27.4161 45.9976 27.5733 45.9976H72.4265C72.7436 45.9976 73.0477 45.8715 73.2719 45.6471C73.4961 45.4227 73.6221 45.1183 73.6221 44.801C73.6226 42.881 73.3894 40.9681 72.9277 39.1046H98.8032C98.9607 39.1048 99.1168 39.0737 99.2623 39.0133C99.4079 38.9529 99.54 38.8643 99.6512 38.7525C99.7624 38.6408 99.8505 38.5082 99.9103 38.3623C99.9701 38.2164 100.001 38.0601 99.9998 37.9024C99.9939 33.2764 98.4656 28.7813 95.6512 25.1119C92.8368 21.4426 88.8931 18.8034 84.4299 17.6026C86.1307 16.4418 87.4152 14.7659 88.0948 12.8209C88.7744 10.8758 88.8134 8.764 88.206 6.79516C87.5987 4.82633 86.377 3.10412 84.7201 1.88118C83.0632 0.658245 81.0584 -0.00105456 78.9997 1.26615e-06C76.9411 0.00105709 74.937 0.662412 73.2813 1.88705C71.6257 3.11169 70.4058 4.83515 69.8004 6.8046C69.1951 8.77406 69.2362 10.8859 69.9178 12.8302C70.5994 14.7745 71.8856 16.4491 73.5877 17.6082C69.2517 18.7742 65.4002 21.2941 62.5932 24.8014C60.4854 23.4652 58.1783 22.4738 55.7588 21.8643C57.7249 20.616 59.233 18.7625 60.0564 16.5826C60.8797 14.4027 60.9738 12.0141 60.3244 9.77612C59.6751 7.53811 58.3174 5.57157 56.4555 4.17221C54.5937 2.77284 52.3283 2.01628 49.9999 2.01628C47.6716 2.01628 45.4062 2.77284 43.5443 4.17221C41.6824 5.57157 40.3248 7.53811 39.6754 9.77612C39.026 12.0141 39.1201 14.4027 39.9435 16.5826C40.7668 18.7625 42.2749 20.616 44.241 21.8643C41.8214 22.4741 39.5143 23.466 37.4066 24.8026C34.6005 21.2939 30.7488 18.7735 26.4122 17.6082C28.114 16.4482 29.3996 14.7728 30.0804 12.8279C30.7612 10.8829 30.8014 8.77081 30.1951 6.80135C29.5887 4.83189 28.3677 3.10877 26.7113 1.88477C25.0548 0.660766 23.05 0.000321572 20.9911 0.000321572C18.9321 0.000321572 16.9274 0.660766 15.2709 1.88477C13.6144 3.10877 12.3935 4.83189 11.7871 6.80135C11.1807 8.77081 11.2209 10.8829 11.9017 12.8279C12.5825 14.7728 13.8682 16.4482 15.57 17.6082C11.1076 18.8088 7.1646 21.4471 4.3503 25.1153C1.536 28.7835 0.00713436 33.2774 4.6487e-06 37.9024C-0.000434203 38.0599 0.0302028 38.216 0.090158 38.3616C0.150113 38.5073 0.238207 38.6396 0.349386 38.7511C0.460565 38.8626 0.592641 38.951 0.738038 39.0113C0.883435 39.0716 1.03929 39.1025 1.19667 39.1024ZM71.7643 9.64194C71.7643 8.20856 72.1889 6.80736 72.9845 5.61552C73.7801 4.42367 74.9109 3.4947 76.2339 2.94607C77.5569 2.39744 79.0127 2.25378 80.4173 2.53326C81.8219 2.81273 83.1121 3.5028 84.1249 4.51619C85.1376 5.52959 85.8275 6.82082 86.1071 8.2266C86.3868 9.63239 86.2437 11.0896 85.696 12.414C85.1482 13.7384 84.2205 14.8705 83.03 15.6672C81.8395 16.4638 80.4397 16.8893 79.0076 16.8897C77.0874 16.8882 75.2463 16.1242 73.8883 14.7654C72.5303 13.4066 71.7664 11.5639 71.7643 9.64194ZM78.9999 19.2819C83.7263 19.2864 88.2743 21.089 91.7225 24.3244C95.1708 27.5598 97.2614 31.9862 97.571 36.7068H72.1977C70.6786 32.5552 68.0319 28.9104 64.5554 26.1827C66.3018 24.033 68.5036 22.2987 71.0017 21.1052C73.4999 19.9117 76.2318 19.289 78.9999 19.2819ZM41.6399 12.7837C41.6399 11.1287 42.1302 9.51093 43.0488 8.13487C43.9674 6.75881 45.2731 5.6863 46.8007 5.05297C48.3283 4.41964 50.0092 4.25393 51.6309 4.5768C53.2525 4.89967 54.7422 5.69661 55.9113 6.86686C57.0805 8.0371 57.8767 9.52808 58.1993 11.1513C58.5218 12.7744 58.3563 14.4569 57.7235 15.9859C57.0908 17.5149 56.0193 18.8218 54.6445 19.7412C53.2697 20.6607 51.6534 21.1514 49.9999 21.1514C47.7834 21.1491 45.6584 20.2667 44.0911 18.698C42.5238 17.1292 41.6423 15.0022 41.6399 12.7837ZM49.9999 23.5447C55.4223 23.5508 60.6374 25.6307 64.5782 29.3588C68.5189 33.0869 70.8873 38.1814 71.1988 43.5999H28.8011C29.1125 38.1814 31.4809 33.0869 35.4217 29.3588C39.3624 25.6307 44.5775 23.5508 49.9999 23.5447ZM13.7544 9.64194C13.7544 8.20865 14.179 6.80754 14.9745 5.61575C15.7699 4.42395 16.9006 3.49498 18.2234 2.94629C19.5463 2.39759 21.002 2.2538 22.4066 2.53309C23.8111 2.81239 25.1013 3.50223 26.1142 4.51541C27.127 5.52858 27.817 6.8196 28.0969 8.22524C28.3768 9.63088 28.2341 11.088 27.6867 12.4125C27.1393 13.7369 26.2119 14.8692 25.0217 15.6661C23.8315 16.463 22.4319 16.8888 21 16.8897C19.0794 16.8888 17.2376 16.1251 15.8791 14.7662C14.5207 13.4073 13.7565 11.5643 13.7544 9.64194ZM20.9933 19.2819C23.7624 19.2863 26.4958 19.9074 28.9954 21.1C31.4951 22.2925 33.6983 24.0268 35.4455 26.1772C31.967 28.9045 29.3183 32.5497 27.7977 36.7024H2.42889C2.73942 31.9837 4.8296 27.5594 8.27631 24.3251C11.723 21.0907 16.2688 19.2881 20.9933 19.2819Z"
        fill={(fill && id == 6) ? fill : "#12100B"}
      />
    </svg>
  );
};

export default CardSix;
