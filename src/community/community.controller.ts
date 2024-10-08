import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { JwtAuthGuard } from 'src/guards/JwtAuthGuard';

@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  // Done
  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createCommunityDto: CreateCommunityDto) {
    return this.communityService.create(createCommunityDto);
  }

  // @Get()
  // findAll() {
  //   return this.communityService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.communityService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCommunityDto: UpdateCommunityDto) {
  //   return this.communityService.update(+id, updateCommunityDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.communityService.remove(+id);
  // }
}
