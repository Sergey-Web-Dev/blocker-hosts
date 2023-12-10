import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
  @ApiProperty({
    example: 'example@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: '1234556678',
  })
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: 'example@gmail.com',
  })
  email: string;

  @ApiProperty({
    example: '1234556678',
  })
  password: string;
}

export class getSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;
}
