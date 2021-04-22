<?php declare(strict_types=1);

namespace Website\Objects\PageImage;

use KikCmsCore\Classes\Model;

class PageImage extends Model
{
    const TABLE = 'cms_page_image';
    const ALIAS = 'pi';

    const FIELD_ID            = 'id';
    const FIELD_NAME          = 'name';
    const FIELD_DESCRIPTION   = 'description';
    const FIELD_PAGE_ID       = 'page_id';
    const FIELD_IMAGE_ID      = 'image_id';
    const FIELD_DISPLAY_ORDER = 'display_order';

    public function initialize()
    {
        parent::initialize();
    }
}
