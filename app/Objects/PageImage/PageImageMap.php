<?php declare(strict_types=1);

namespace Website\Objects\PageImage;

use KikCmsCore\Classes\ObjectMap;

class PageImageMap extends ObjectMap
{
    /**
     * @inheritdoc
     * @return PageImage|false
     */
    public function current()
    {
        return parent::current();
    }

    /**
     * @inheritdoc
     * @return PageImage|false
     */
    public function get($key)
    {
        return parent::get($key);
    }

    /**
     * @inheritdoc
     * @return PageImage|false
     */
    public function getFirst()
    {
        return parent::getFirst();
    }

    /**
     * @inheritdoc
     * @return PageImage|false
     */
    public function getLast()
    {
        return parent::getLast();
    }
}
