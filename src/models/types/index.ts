import {SvgIconTypes} from '../../assets/svgIcon';

export interface KeyAbleProps {
  [key: string]: any;
}
export interface IApiResponse {
  status: number;
  result: any;
  title: string;
  message: string;
}
export type LanguageItemType = {
  id: string;
  label: string;
  code: string;
  image: any;
  isSelected: boolean;
};

export type IResOrganization = {
  company_name?: string;
  erpnext_url?: string;
  country?: string;
  erpnext_setup?: string;
  first_name?: string;
  last_name?: string;
  email_id?: string;
  mobile_no?: string;
  status?: string;
};

export type ILoginResponse = {
  key_details: {
    api_key: string;
    api_secret: string;
  };
  user: {
    date_of_birth: string;
    department: string;
    designation: string | null;
    employee: string;
    employee_name: string;
    gender: string;
    image: string | null;
    salutation: string | null;
    shift: {
      shift_status: string;
      shift_type_now: boolean;
    };
    user_id: string;
  };
};

export type IProductList = {
  name: string;
  type: string;
  code: string;
};

export type IProductOverview = {
  name: string;
  code: string;
  unit: string;
  price: number;
  trademark: string | null;
  commodity_industry: string | null;
  note: string | null;
  image: string[];
  file?: {
    file_name: string;
    size: number;
    url: string;
  }[];
};

export type IProductUnit = {};

export type IProductInventory = {
  label: string;
  count: number;
};

export interface RootObjectGeoDecoding {
  plus_code: PlusCode;
  results: ResultDecode[];
  status: string;
}
export interface ResultDecode {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  plus_code?: PlusCode;
  types: string[];
}
export interface Geometry {
  location: Location;
  location_type: string;
  viewport: Viewport;
  bounds?: Viewport;
}
export interface Viewport {
  northeast: Location;
  southwest: Location;
}
export interface Location {
  lat: number;
  lng: number;
}
export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}
export interface PlusCode {
  compound_code: string;
  global_code: string;
}
export type VisitListItemType = {
  name: string;
  customer_primary_address: string;
  customer_code: string;
  customer_location_primary: any;
  mobile_no: string | null;
  customer_name: string;
  birthday: string | null;
  is_checkin: boolean;
};

export interface RootObjectGeoDecoding {
  plus_code: PlusCode;
  results: ResultDecode[];
  status: string;
}
export interface ResultDecode {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  plus_code?: PlusCode;
  types: string[];
}
export interface Geometry {
  location: Location;
  location_type: string;
  viewport: Viewport;
  bounds?: Viewport;
}
export interface Viewport {
  northeast: Location;
  southwest: Location;
}
export interface Location {
  lat: number;
  lng: number;
}
export interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}
export interface PlusCode {
  compound_code: string;
  global_code: string;
}
export interface IWidget {
  id: number;
  name: string;
  icon: SvgIconTypes;
  navigate: string | any;
  isUse?: boolean;
}
export type ItemNoteVisitDetail = {
  noteType: string;
  description: string;
  content: string;
  time: string;
  date: string;
};

export interface RootEkMapResponse {
  results: ResultEkMapResponse[];
  status: string;
}

export interface ResultEkMapResponse {
  address_components: AddressEkMapComponent[];
  formatted_address: string;
  geometry: GeometryEkResponse;
}

export interface AddressEkMapComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface GeometryEkResponse {
  location: LocationEkResponse;
  location_type: string;
  viewport: Viewport;
}

export interface LocationEkResponse {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Northeast;
  southwest: Southwest;
}

export interface Northeast {
  lat: number;
  lng: number;
}

export interface Southwest {
  lat: number;
  lng: number;
}

export type ReportOrderItemType = {
  name: string;
  transaction_date: string;
  time?: string;
  grand_total: number;
};

export type ReportProductOrderType = {
  name: string;
  item_name: string; // Tên item
  item_code: string; // mã item
  rate: number; // đơn giá
  qty: number; // Số lượng
  uom: string; // đơn vị tính
  amount: number; // Thành tiền
  discount_amount: number; // chiết khấu (VND)
  discount_percentage: number; // chiết khấu (%)
  is_free_item: number; // check sp KM
};

export type ReportProductInventoryType = {
  item_code: string;
  item_name: string;
  item_unit: string;
  item_price: number;
  quanity: number;
  exp_time: string;
  update_at: string;
  update_byname: string;
  update_bycode: string;
};

export type ReportInventoryType = {
  name: string;
  creation: string;
  items: ReportProductInventoryType[];
};

export type ReportDebtListType = {
  dateTime: string | number;
  description: string;
  numberDebt: number;
};

export type ReportDebtType = {
  total: number;
  listDebt: ReportDebtListType[];
};
export type IDataCustomer = {
  customer_code: string;
  customer_name: string;
  customer_type: string;
  customer_group: string;
  territory: string;
  customer_details?: string;
  custom_birthday?: number;
  company?: string;
  credit_limit?: string;
  address_title_cus?: string;
  address_type_cus?: string;
  detail_address_cus?: string;
  ward_cus?: string;
  district_cus?: string;
  province_cus?: string;
  first_name?: string;
  phone?: string;
  adr_title_contact?: string;
  adr_type_contact?: string;
  detail_adr_contact?: string;
  ward_contact?: string;
  district_contact?: string;
  province_contact?: string;
  is_shipping_address?: boolean;
  is_primary_address?: boolean;
  router_name?: any;
  frequency?: any;
  website?: string;
  longitude?: number;
  latitude?: number;
  name_image?: '';
  faceimage?: string;
};
export interface IDataCustomers {
  name: string;
  customer_name: string;
  customer_code: string;
  customer_type: string;
  customer_group: string;
  territory: string;
  industry: any;
  image: any;
  website: string;
  customer_primary_contact: string;
  customer_primary_address: string;
  custom_birthday: number;
  customer_location_primary: any;
  customer_details: any;
  contact: Contact[];
  address: Address[];
  cre_limid: CreLimid[];
}

export interface ContactCustomer {
  first_name: string;
  phone: string;
  is_primary_contact: number;
  is_billing_contact: number;
}

export interface AddressCustomer {
  name: string;
  address_line1: string;
  address_line2: any;
  city: string;
  state: any;
  is_primary_address: number;
  is_shipping_address: number;
  county?: string;
}

export interface CreLimid {
  credit_limit: number;
}

export interface RootEkMapResponse {
  results: ResultEkMapResponse[];
  status: string;
}

export interface ResultEkMapResponse {
  address_components: AddressEkMapComponent[];
  formatted_address: string;
  geometry: GeometryEkResponse;
}

export interface AddressEkMapComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface GeometryEkResponse {
  location: LocationEkResponse;
  location_type: string;
  viewport: Viewport;
}

export interface LocationEkResponse {
  lat: number;
  lng: number;
}

export interface Viewport {
  northeast: Northeast;
  southwest: Southwest;
}

export interface Northeast {
  lat: number;
  lng: number;
}

export interface Southwest {
  lat: number;
  lng: number;
}

interface Address {
  address: string;
  isSetAddressGet: boolean;
  isSetAddressTake: boolean;
}

interface Contact {
  address: string;
  name: string;
  phoneNumber: string;
}

export interface IDataItem {
  address: Address;
  area: string;
  customerCode?: string;
  contact: Contact;
  debtLimit: number | string; // Assuming it can be a number or a string
  description: string;
  dob: string;
  gland: string;
  group: string;
  nameCompany: string;
  type: string;
  websiteURL: string;
  imageSource: any;
}

export type IAlbumImage = {
  id: number | string | any;
  label: string;
  image: {
    url: string;
    base64?: string;
  }[];
};

export type IStaff = {
  id: string | number;
  name: string;
  position: string;
  isSelected: boolean;
};

export type TravelDiaryType = {
  time: string;
  date: number;
  isCheckIn: boolean;
  locationName: string;
  locationAddress: string;
};

export type VisitedItemType = {
  name: string;
  code: string;
  time?: string;
  date?: number;
  inChannel?: boolean;
  imgCount?: number;
  isOrder?: boolean;
  totalSale?: number;
  businessType?: string;
  address?: string;
  phone?: string;
};

export type ReportCustomerType = {
  name: string;
  code: string;
  address: string | null;
  lastOrder?: string;
  customerType?: string;
  customerGroup?: string;
  channel?: string | null;
  collectionDate?: number;
};

export type ReportDebtTotalType = {
  name: string;
  code: string;
  phone: string;
  address: string;
  totalDebt: number;
  paid: number;
  remaining: number;
};

export type ReportKPIItemType = {
  title: string;
  progress: number;
  time: number;
  plan: number;
  perform: number;
  remaining: number;
};

export type ReportKPIType = {
  revenue: ReportKPIItemType;
  sales: ReportKPIItemType;
  order: ReportKPIItemType;
  visit: ReportKPIItemType;
  newCustomer: ReportKPIItemType;
};
type UinitProduct = {
  uom: string;
  price_list_rate: number;
  valid_from: string;
  currency: string;
};

type DataUnit = {
  uom: string;
  conversion_factor: string;
};

export type StockProduct = {
  t_warehouse: string;
  qty: number;
};

export type discountProduct = {
  priority: string;
  discount_percentage: number;
};

type ImageProduct = {
  link_image: string;
};

export type IProduct = {
  name: string;
  item_code: string;
  item_name: string;
  item_group: string;
  stock_uom: string;
  min_order_qty: number;
  description: string;
  brand: string;
  country_of_origin: string;
  image: string;
  custom_industry: string;
  custom_images_item: ImageProduct[];
  end_of_life: string;
  details: UinitProduct[];
  stock: StockProduct[];
  quantity?: number;
  discount_percentage: discountProduct[];
  discount: number;
  price: number;
  unit: DataUnit[];
  isSelected?: boolean;
};

export type IOrderList = {
  customer: string;
  name: string;
  address_display: string;
  po_date: number;
  delivery_date: number;
  status: string;
  custom_id: number | string;
  grand_total: number;
  rounding_adjustment: number;
  rounded_total: number;
  creation: number;
};

export type ItemProductOrder = {
  item_name: string;
  name: string;
  item_code: string;
  qty: number;
  uom: string;
  amount: number;
  discount_percentage: number;
};

export type IOrderDetail = {
  list_items: ItemProductOrder[];
  customer: string;
  customer_name: string;
  address_display: string;
  delivery_date: number;
  set_warehouse: string;
  taxes_and_charges: number;
  total_taxes_and_charges: number;
  apply_discount_on: number;
  additional_discount_percentage: number;
  discount_amount: number;
  contact_person: string;
  rounded_total: number;
  grand_total: number;
  total: number;
  tax_amount?: number;
  rate?: number;
  account_head?: string;
  status: string;
  charge_type?: string;
};

export type BrandProduct = {
  name: string;
  brand: string;
  description: string | null;
};

export type ListCustomerType = {
  name: string;
  customer_group_name: string;
};

export type ListCustomerTerritory = {
  name: string;
  territory_name: string;
};

export type ListCustomerRoute = {
  name: string;
  channel_name: string;
  channel_code: string;
};

export type IProductPromotion = {
  item_code: string;
  qty: number;
  pricing_rules: string;
  rate: number;
  price_list_rate: number;
  is_free_item: number;
  item_name: string;
  description: string;
  stock_uom: string;
  uom: string;
  conversion_factor: number;
  delivery_date: string;
  parent_item?: string;
};

export type StaffType = {
  name: string;
  first_name: string;
  image: any;
  user_id: string;
  designation: any;
  isCheck?: boolean;
};

export type ImageCheckIn = {
  customer_name: string;
  album_id: string;
  album_name: string;
  checkin_id: string;
  customer_id: string;
  customer_code: string;
  long: number;
  lat: number;
  address?: string;
  image: string;
};

export type NoteType = {
  name: string;
  title: string;
  content: string;
  creation: string;
  custom_checkin_id: any;
};

export type CheckinOrderDetail = {
  list_items: ListItem[];
  customer: string;
  customer_name: string;
  address_display: string;
  delivery_date: number;
  set_warehouse: string;
  total: number;
  grand_total: number;
  taxes_and_charges: string;
  total_taxes_and_charges: number;
  apply_discount_on: string;
  additional_discount_percentage: number;
  discount_amount: number;
  contact_person: string;
  rounded_total: number;
  tax_amount: number;
  rate: number;
  account_head: string;
  charge_type: string;
};

export interface ListItem {
  name: string;
  item_name: string;
  item_code: string;
  qty: number;
  uom: string;
  amount: number;
  discount_percentage: number;
}

export interface CustomerRouter {
  customer_id: string;
  customer_name: string;
  display_address: string;
  phone_number: string;
  customer: string;
  frequency: string;
}
export interface CustomerRouterResponse {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  customer: string;
  customer_id: string;
  customer_name: string;
  display_address: string;
  phone_number: string;
  frequency: string;
  longitude: number;
  parent: string;
  parentfield: string;
  parenttype: string;
  doctype: string;
  __unsaved: number;
}
export interface UpdateRoutePayload {
  channel_code: string;
  team_sale: string;
  channel_name: string;
  employee: string;
  travel_date: string;
  status: string;
  customers: CustomerRouter[];
}
export interface UpdateRouteResponse {
  name: string;
  owner: string;
  creation: string;
  modified: string;
  modified_by: string;
  docstatus: number;
  idx: number;
  channel_code: string;
  team_sale: string;
  travel_date: string;
  channel_name: string;
  employee: string;
  status: string;
  is_deleted: number;
  doctype: string;
  customers: CustomerRouterResponse[];
}
export type IKpi = {
  doanh_thu: number;
  doanh_so: number;
  don_hang: number;
  vieng_tham: number;
  kh_moi: number;
};

export type IReportSales = {
  Kpi: {
    dat_duoc: number;
    phan_tram_thuc_hien: number;
  };
  sales_invoice: [
    {
      ngay: string;
      doanh_so: number;
    },
  ];
};

export type IReportRevenue = {
  Kpi: {
    dat_duoc: number;
    phan_tram_thuc_hien: number;
  };
  sales_invoice: [
    {
      ngay: string;
      doanh_thu: number;
    },
  ];
};

export type IReportVisit = {
  chi_tieu: number;
  dat_duoc: number;
  phan_tram_thuc_hien: number;
};

export type IUser = {
  employee: string;
  employee_name: string;
  gender: string;
  date_of_birth: string;
  date_of_joining: string;
  salutation: string;
  image: string;
  user_id: string;
  department: string;
  designation: string;
  cell_number: string;
  current_address: string;
};

export type EditAccountInfo = {
  avatar: string;
  name: string;
  email: string;
  gender: string;
  phone: string;
  bornDate: string;
  address: string;
};

export type IVisitRouteDetail = {
  ngay: string;
  so_don_trong_thang: number;
  doanh_thu_thang: number;
  nv_vieng_tham: string;
  vieng_tham_cuoi: string;
  nv_dat_hang: string;
  don_hang_cuoi: string;
};

export type OrderDetailItemType = {
  name: string;
  transaction_date: string;
  grand_total: number;
};

export type IReportVisitDetail = {
  don_hang: {
    so_don_trong_thang: number;
    so_tien_phai_tra: number;
    danh_sach_don: OrderDetailItemType[];
  };
  ton_kho: ReportInventoryType[];
};

export type IOrderDetailItem = {
  list_items: ReportProductOrderType[];
  customer: string;
  customer_name: string;
  customer_code: string;
  address_display: string;
  delivery_date: number;
  set_warehouse: string;
  total: number;
  grand_total: number;
  taxes_and_charges: string;
  rate_tax: number;
  tax_amount: number;
  total_taxes_and_charges: number;
  apply_discount_on: string;
  additional_discount_percentage: number;
  discount_amount: number;
  contact_person: string;
  employee_name: string;
  cell_number: string;
  current_address: string;
};


export interface ReportRouterResultType {
  doanh_so: number
  vieng_tham_co_don: number
  vieng_tham_ko_don: number
  vieng_tham_co_anh: number
  vieng_tham_ko_anh: number
  vt_dung_tuyen: number
  vt_ngoai_tuyen: number
  so_kh_da_vt: number
  so_kh_phai_vt: number
}

export interface ReportTravelDiaryType {
  __time: string
  objectid: string
  projectid: string
  uuid: string
  lng: any
  lat: any
  activity: string
  accuracy: number
  battery_checkin: number
  battery_checkout: number
  createddate: string
  time_checkout: string
  time_checkin: string
  ext: string
  timestamp: string
  coordinates: string
  "kafka.timestamp": number
  "kafka.topic": string,
  address : string | null,
}
