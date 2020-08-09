export class Cities {
  name: string;
  slug: string;
  type: string;
  mien_id: number;
  mien: string;
  name_with_type: string;
  code: string;
}

export class VoucherInfo {
  text: string;
  value: string;
  rule: string;
}

export const cities: Cities[] = [
  {
    name: 'Hà Nội',
    slug: 'ha-noi',
    type: 'thanh-pho',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Thành phố Hà Nội',
    code: '01'
  },
  {
    name: 'Hồ Chí Minh',
    slug: 'ho-chi-minh',
    type: 'thanh-pho',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Thành phố Hồ Chí Minh',
    code: '79'
  },
  {
    name: 'Đà Nẵng',
    slug: 'da-nang',
    type: 'thanh-pho',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Thành phố Đà Nẵng',
    code: '48'
  },
  {
    name: 'Hải Phòng',
    slug: 'hai-phong',
    type: 'thanh-pho',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Thành phố Hải Phòng',
    code: '31'
  },
  {
    name: 'Bắc Ninh',
    slug: 'bac-ninh',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Bắc Ninh',
    code: '27'
  },
  {
    name: 'Quảng Ninh',
    slug: 'quang-ninh',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Quảng Ninh',
    code: '22'
  },
  {
    name: 'Nam Định',
    slug: 'nam-dinh',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Nam Định',
    code: '36'
  },
  {
    name: 'Thái Bình',
    slug: 'thai-binh',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Thái Bình',
    code: '34'
  },
  {
    name: 'Phú Thọ',
    slug: 'phu-tho',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Phú Thọ',
    code: '25'
  },
  {
    name: 'Ninh Bình',
    slug: 'ninh-binh',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Ninh Bình',
    code: '37'
  },
  {
    name: 'Thái Nguyên',
    slug: 'thai-nguyen',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Thái Nguyên',
    code: '19'
  },
  {
    name: 'Lào Cai',
    slug: 'lao-cai',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Lào Cai',
    code: '10'
  },
  {
    name: 'Hải Dương',
    slug: 'hai-duong',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Hải Dương',
    code: '30'
  },
  {
    name: 'Hà Nam',
    slug: 'ha-nam',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Hà Nam',
    code: '35'
  },
  {
    name: 'Vĩnh Phúc',
    slug: 'vinh-phuc',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Vĩnh Phúc',
    code: '26'
  },
  {
    name: 'Lạng Sơn',
    slug: 'lang-son',
    type: 'tinh',
    mien_id: 1,
    mien: 'Miền Bắc',
    name_with_type: 'Tỉnh Lạng Sơn',
    code: '20'
  },
  {
    name: 'Cần Thơ',
    slug: 'can-tho',
    type: 'thanh-pho',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Thành phố Cần Thơ',
    code: '92'
  },
  {
    name: 'An Giang',
    slug: 'an-giang',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh An Giang',
    code: '89'
  },
  {
    name: 'Bạc Liêu',
    slug: 'bac-lieu',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Bạc Liêu',
    code: '95'
  },
  {
    name: 'Bình Định',
    slug: 'binh-dinh',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Bình Định',
    code: '52'
  },
  {
    name: 'Bình Dương',
    slug: 'binh-duong',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Bình Dương',
    code: '74'
  },
  {
    name: 'Bình Thuận',
    slug: 'binh-thuan',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Bình Thuận',
    code: '60'
  },
  {
    name: 'Cà Mau',
    slug: 'ca-mau',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Cà Mau',
    code: '96'
  },
  {
    name: 'Đồng Nai',
    slug: 'dong-nai',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Đồng Nai',
    code: '75'
  },
  {
    name: 'Đồng Tháp',
    slug: 'dong-thap',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Đồng Tháp',
    code: '87'
  },
  {
    name: 'Gia Lai',
    slug: 'gia-lai',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Gia Lai',
    code: '64'
  },
  {
    name: 'Nha Trang',
    slug: 'nha-trang',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Thành Phố Nha Trang',
    code: '56'
  },
  {
    name: 'Kiên Giang',
    slug: 'kien-giang',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Kiên Giang',
    code: '91'
  },
  {
    name: 'Kon Tum',
    slug: 'kon-tum',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Kon Tum',
    code: '62'
  },
  {
    name: 'Đăk Lăk',
    slug: 'dak-lak',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Đăk Lăk',
    code: '100'
  },
  {
    name: 'Phú Yên',
    slug: 'phu-yen',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Phú Yên',
    code: '54'
  },
  {
    name: 'Sóc Trăng',
    slug: 'soc-trang',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Sóc Trăng',
    code: '94'
  },
  {
    name: 'Tây Ninh',
    slug: 'tay-ninh',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Tây Ninh',
    code: '72'
  },
  {
    name: 'Tiền Giang',
    slug: 'tien-giang',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Tiền Giang',
    code: '82'
  },
  {
    name: 'Bà Rịa - Vũng Tàu',
    slug: 'ba-ria-vung-tau',
    type: 'tinh',
    mien_id: 2,
    mien: 'Miền Nam',
    name_with_type: 'Tỉnh Bà Rịa - Vũng Tàu',
    code: '77'
  }
];

export const segments: VoucherInfo[] = [{
  text: 'buffetxeoxeo',
  value: 'Buffet Xèo Xèo Premium trị giá 329.000VNĐ/người',
  rule: `<li>Phần thưởng là 01 suất Buffet Xèo Xèo Premium trị giá 329.000VNĐ/người áp dụng với mỗi nhóm 04 người lớn sử dụng Buffet Xèo Xèo Premium.</li>
  <li>Phần thưởng áp dụng với mỗi nhóm 04 người lớn sử dụng Buffet Xèo Xèo Premium.</li>
  <li>Thời gian áp dụng: 29/06 - 06/09/2020. Không áp dụng 01/09 – 02/09/2020.</li>
  <li>Địa điểm áp dụng: Các nhà hàng GoGi House trên toàn quốc.</li>
  <li>Phần thưởng được áp dụng lũy kế.</li>
  <li>Giá bán Buffet Xèo Xèo Premium thay đổi theo khu vực và chưa bao gồm 10% VAT.</li>
  <li>Khách hàng The Golden Spoon được áp dụng song song với việc sử dụng tiền trong ví và tích điểm nâng hạng thẻ; không được tích tiền vào ví.</li>
  <li>Phần thưởng không áp dụng song song các chương trình hiện có.</li>
  <li>Phần thưởng có hiệu lực sau 3 tiếng kể từ thời điểm quay thưởng thành công.
  </li>`
},
{
  text: 'coupon100',
  value: 'Voucher trị giá 100.000VNĐ',
  rule: `<li>Phần thưởng là 01 coupon trị giá 100.000VNĐ áp dụng với mỗi tiêu dùng 400.000VNĐ.</li>
    <li>Phần thưởng áp dụng với mỗi tiêu dùng 400.000VNĐ. </li>
    <li>Phần thưởng được áp dụng giảm trừ trước thuế.</li>
    <li>Thời gian áp dụng: 29/06 - 06/09/2020. Không áp dụng 01/09 – 02/09/2020.</li>
    <li>Địa điểm áp dụng: Các nhà hàng GoGi House trên toàn quốc.</li>
    <li>Phần thưởng được áp dụng lũy kế.</li>
    <li>Khách hàng The Golden Spoon được áp dụng song song với việc sử dụng tiền trong ví và tích điểm nâng hạng thẻ; không được tích tiền vào ví.</li>
    <li>Phần thưởng không áp dụng song song các chương trình hiện có.</li>
    <li>Phần thưởng có hiệu lực sau 3 tiếng kể từ thời điểm quay thưởng thành công.</li>`
},
{
  text: 'buffetcoca',
  value: 'Buffet Coca-Cola trị giá 39.000đ',
  rule: `<li>Phần thưởng là Buffet Coca-Cola tươi áp dụng cho toàn bàn khi sử dụng Buffet Xèo Xèo Premium.</li>
  <li>Phần thưởng áp dụng cho toàn bàn khi sử dụng Buffet Xèo Xèo Premium.</li>
  <li>Thời gian áp dụng: 29/06 - 06/09/2020. Không áp dụng 01/09 – 02/09/2020.</li>
  <li>Địa điểm áp dụng: Các nhà hàng GoGi House trên toàn quốc.</li>
  <li>Giá bán Buffet Coca-Cola thay đổi theo khu vực và chưa bao gồm 10% VAT.</li>
  <li>Khách hàng The Golden Spoon được áp dụng song song với việc sử dụng tiền trong ví và tích điểm nâng hạng thẻ; không được tích tiền vào ví.</li>
  <li>Phần thưởng không áp dụng song song các chương trình hiện có.</li>
  <li>Phần thưởng có hiệu lực sau 3 tiếng kể từ thời điểm quay thưởng thành công.</li>`
},
{
  text: 'coupon200',
  value: 'Voucher trị giá 200.000VNĐ',
  rule: `<li>Phần thưởng là 01 coupon trị giá 200.000VNĐ áp dụng với mỗi tiêu dùng 800.000VNĐ.</li>
  <li>Phần thưởng áp dụng với mỗi tiêu dùng 800.000VNĐ. </li>
  <li>Phần thưởng được áp dụng giảm trừ trước thuế.</li>
  <li>Thời gian áp dụng: 29/06 - 06/09/2020. Không áp dụng 01/09 – 02/09/2020.</li>
  <li>Địa điểm áp dụng: Các nhà hàng GoGi House trên toàn quốc.</li>
  <li>Phần thưởng được áp dụng lũy kế.</li>
  <li>Khách hàng The Golden Spoon được áp dụng song song với việc sử dụng tiền trong ví và tích điểm nâng hạng thẻ; không được tích tiền vào ví.</li>
  <li>Phần thưởng không áp dụng song song các chương trình hiện có.</li>
  <li>Phần thưởng có hiệu lực sau 3 tiếng kể từ thời điểm quay thưởng thành công.</li>`
}
];
