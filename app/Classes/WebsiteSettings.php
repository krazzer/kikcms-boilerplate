<?php

namespace Website\Classes;


use KikCMS\Classes\Frontend\Extendables\WebsiteSettingsBase;
use KikCMS\ObjectLists\MenuGroupMap;
use Phalcon\Mvc\Router\Group;

class WebsiteSettings extends WebsiteSettingsBase
{
    /**
     * @inheritdoc
     */
    public function addFrontendRoutes(Group $frontend)
    {
    }

    /**
     * @inheritdoc
     */
    public function addBackendRoutes(Group $backend)
    {
    }

    /**
     * @inheritdoc
     */
    public function getMenuGroupMap(MenuGroupMap $menuGroupMap): MenuGroupMap
    {
        return $menuGroupMap;
    }

    /**
     * @inheritdoc
     */
    public function getServices(): array
    {
        return [];
    }

    /**
     * @return string|null
     */
    public function getCustomCss(): ?string
    {
        return '/css/cms.css';
    }
}