const BILL_ITEMS = [
  {
    item: 'Item 1',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    quantity: '5',
    price: '120.00',
    totals: '2,800.00'
  },
  {
    item: 'Item 2',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    quantity: '5',
    price: '120.00',
    totals: '2,800.00'
  },
  {
    item: 'Item 3',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    quantity: '5',
    price: '120.00',
    totals: '2,800.00'
  },
  {
    item: 'Item 4',
    content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    quantity: '5',
    price: '120.00',
    totals: '2,800.00'
  }
]
const BILL_TOTALS = [
  {
    totalPrice: '2,800.00',
    taxsPrice: '2,800.00',
    discountPrice: '2,800.00',
    netAmountPrice: '2,800.00'
  }
]

export const FormBilling = (): JSX.Element => {
  return (
    <div className="div flex flex-col text-sm">
      <div className="flex flex-row border-b border-gray-500">
        <div className="w-[40%]">Items</div>
        <div className="w-[20%]">Quantity</div>
        <div className="w-[20%]">Price</div>
        <div className="w-[20%]">Totals</div>
      </div>
      {BILL_ITEMS.map(bill => (
        <div className="flex flex-row py-2" key={bill.item}>
          <div className="flex flex-col w-[40%]">
            <div className="">{bill.item}</div>
            <div className="">{bill.content}</div>
          </div>
          <div className="w-[20%] flex flex-col justify-center items-start ml-5">{bill.quantity}</div>
          <div className="w-[20%] flex flex-col justify-center items-start">${bill.price}</div>
          <div className="w-[20%] flex flex-col justify-center items-start">${bill.totals}</div>
        </div>
      ))}

      {BILL_TOTALS.map(value => (
        <div className="" key={value.totalPrice}>
          <div className="flex-row flex justify-between py-4">
            <div className="">Total</div>
            <div className="w-[20%]">${value.totalPrice}</div>
          </div>
          <div className="flex-row flex justify-between py-4">
            <div className="">Taxs</div>
            <div className="w-[20%]">${value.taxsPrice}</div>
          </div>
          <div className="flex-row flex justify-between border-b py-4 border-gray-500">
            <div className="">Discount</div>
            <div className="w-[20%]">${value.discountPrice}</div>
          </div>
          <div className="flex-row flex justify-between py-4 font-bold text-base">
            <div>Net Amount</div>
            <div className="w-[20%]">${value.netAmountPrice}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
