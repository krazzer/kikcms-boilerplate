<?php declare(strict_types=1);

namespace Website\Objects\PageImage;

use KikCMS\Classes\WebForm\DataForm\DataForm;

class PageImageForm extends DataForm
{
    /**
     * @inheritdoc
     */
    public function getModel(): string
    {
        return PageImage::class;
    }

    /**
     * @inheritdoc
     */
    protected function initialize()
    {
        // add form code...
    }
}
