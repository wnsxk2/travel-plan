export interface City {
  code: string; // 도시 코드 구분자 역할 ex) seoul
  name: string; // 도시의 한글 이름
  nameEn: string; // 도시의 영어 이름
  thumbnail: string; // 도시의 썸네일 이미지 URL
  description: string;
  timezone: string; // 도시의 시간대 정보
  flightHour: number; // 비행 시간 (단위: 시간)
  timezoneOffset: number; // UTC 오프셋 (단위: 시간)
  coordinates: {
    lat: number; // 위도
    lng: number; // 경도
  };
  country: Country; // 도시가 속한 국가 정보
}

export interface Country {
  code: string; // 국가 코드
  name: string; // 국가 이름
  nameEn: string; // 국가 영어 이름
  voltage: string; // 국가 전압 정보
  visa: {
    required: boolean; // 비자 필요 여부
    duration: number; // 비자 설명
  };
  continent:
    | 'Asia'
    | 'Europe'
    | 'North America'
    | 'South America'
    | 'Africa'
    | 'Oceania'
    | 'Antarctica'; // 대륙 정보
}
