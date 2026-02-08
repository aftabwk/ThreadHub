import React from "react";

const AddressCard = ({ address }) => {
  return (
    <div>
      <div className="space-y-3">
        <div>
          <p className="font-semibold">
            {address?.firstName + " " + address?.lastName}
          </p>
          <p>
            {address?.state},{address?.streetAddress},{address?.zipCode}
          </p>
        </div>
        <div>
          <p className="font-semibold">Phone Number</p>
          <>{address?.mobile}</>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
